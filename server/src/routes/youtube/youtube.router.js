import  express from "express";
import { fileURLToPath } from 'url';
import cp from "child_process";
import ffmpeg from 'ffmpeg-static';
import fs from 'fs';
import id3 from 'node-id3';
import path from 'path';
import ytdl from 'ytdl-core';
import utils from "../../utils/utils.js";
const youtubeRouter = express.Router()

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

async function convertor(req,res) {
    const {url} = req.body
    // get video info using ytdl-core function
    let videoInfo;
    try {
        videoInfo = await ytdl.getInfo(url, {quality: 'lowest'});
    } catch(error) {
        throw new Error(`An unexpected exception occurred during call to ytdl-core function "getInfo"\n\n${error.stack}`)
    };

    // attempt to extract song tags from ytdl info and ask user to input missing tags
    let songTags = {
        'title': "audio",
    }

    if (Object.values(songTags).includes(undefined)) {
        console.log("Unable to extract all song tags from YouTube");
    };

    for (const tag in songTags) {
        if (songTags[tag] === undefined) {
            songTags[tag] = await utils.userInput(`Enter ${tag}: `);
        };
    };

    // generate filenames based on song tags
    let baseFileName = utils.uniqId();

    let filePaths = {
        "audioFile": path.join(__dirname, `/${baseFileName}.mp3`),
        "videoFile": path.join(__dirname, `/${baseFileName}.mp4`),
        "outputAudioFile": path.join(__dirname, `/${'output'}.mp3`),
    };

    // remove old files of the same names
    for (let file of Object.values(filePaths)) {
        if (fs.existsSync(file)) {
          await fsPromises.rm(file);
        };
    };

    // download video
    let stream = ytdl.downloadFromInfo(videoInfo, {quality: 'lowest'})
        .pipe(fs.createWriteStream(filePaths.videoFile));
    
    
    await new Promise((resolve, reject) => {
        stream.on("finish", resolve);
        stream.on("error", (err) => {

            reject(err);
        });
    });
    
    // convert video to audio
    await new Promise((resolve, reject) => {
      cp.exec(`${ffmpeg} -loglevel 24 -i ${filePaths.videoFile} -vn -sn -c:a mp3 -ab 192k  ${filePaths.audioFile}`,()=> resolve());
  });
    await new Promise((resolve, reject) => {
        cp.exec(`${ffmpeg} -i ${filePaths.audioFile}  -af "asetrate=44100*432/440,aresample=44100,atempo=440/432"  ${filePaths.outputAudioFile}`,()=> resolve());
    });

    await fsPromises.rm(filePaths.videoFile);
    id3.write(songTags, filePaths.audioFile);
    const pathCheckOutput = fs.existsSync(filePaths.outputAudioFile)
    
    const fileSend = pathCheckOutput ? filePaths.outputAudioFile : filePaths.audioFile
    res.sendFile(fileSend)
    await fsPromises.rm(filePaths.audioFile);
   
}

youtubeRouter.post("/",convertor)

export default youtubeRouter