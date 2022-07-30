const { EasyFF } = require('EasyFF');

const path = require('path')
const uniqId = require("./functions/utils/utils")

function convertMp3(videoPath) {
  const mp3Path = path.join(__dirname, `../build/${uniqId()}.mp3`)
  const ffmpeg = new EasyFF(videoPath);
  return new Promise((resolve,reject)=> {
    ffmpeg.on("log", console.log) 
    ffmpeg.on("error", reject); 
    ffmpeg.on("proccess", (size, time, bitrate, speed, asjson)=>{ 
      console.log(asjson);
    })
    ffmpeg.on("end", ()=>resolve(mp3Path))
    ffmpeg.on("start", ()=>console.log("Start"))
    ffmpeg.addInput(`${videoPath}`);
    // ffmpeg.addInputOption('-re')
    ffmpeg.addOutputOption(['-ar', '48000']);
    ffmpeg.addOutputOption('-y')
    ffmpeg.isWeb();
    ffmpeg.reWrite();
    ffmpeg.run(mp3Path)
  }) 
  
}
module.exports = convertMp3