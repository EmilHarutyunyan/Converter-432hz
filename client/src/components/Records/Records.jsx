import React, { useEffect, useRef, useState } from 'react'
// import useRecorder from '../../hooks/useRecorder';
import { Mp3MediaRecorder } from 'mp3-mediarecorder';
import mp3RecorderWorker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { Btn } from '../Button/Button.styles';
import { AudioWrap, BtnWrap } from './Records.styles';

const Records = () => {
  const recorderRef = useRef(null);
    const worker = useRef(null);
    const [recordings, setRecordings] = useState([]);
    const [recorderState, setRecorderState] = useState('inactive');

    useEffect(() => {
        worker.current = mp3RecorderWorker();
    }, []);

    const onRecord = () => {
        const constraints = {
            audio: {
                channelCount: 1,
                sampleRate: 43200,
                sampleSize: 16,
                volume: 1
            }
        }
        
        window.navigator.mediaDevices.getUserMedia({ audio: constraints }).then((stream) => {
            const recorder = new Mp3MediaRecorder(stream, { worker: worker.current });
            recorderRef.current = recorder;
            recorder.ondataavailable = (event) => {
                console.log('ondataavailable', event.data);
                setRecordings((prevRecordings) => [...prevRecordings, URL.createObjectURL(event.data)]);
            };
            recorder.onstart = () => {
                console.log('onstart');
                setRecorderState('recording');
            };
            recorder.onstop = () => {
                console.log('onstop');
                setRecorderState('inactive');
            };
            recorder.onpause = () => {
                console.log('onpause');
                setRecorderState('paused');
            };
            recorder.onresume = () => {
                console.log('onresume');
                setRecorderState('recording');
            };

            recorder.start();
        });
    };

    const onStop = () => {
        recorderRef.current.stop();
    };

    const onPause = () => {
        recorderRef.current.pause();
    };

    const onResume = () => {
        recorderRef.current.resume();
    };
  return (
    <>
      <BtnWrap>
      <div>
      <Btn onClick={onRecord} className={ recorderState !== 'inactive' ? 'is-disabled record-disable' : ''}  primary>
        Record
      </Btn>
      <Btn error onClick={onStop} className={ recorderState !== 'recording' ?  'is-disabled': recorderState} >
        Stop
      </Btn>
      </div>
    <div>
    <Btn onClick={onResume} className={recorderState !== 'paused' ? 'is-disabled': recorderState }>Resume</Btn>
      <Btn onClick={onPause} className={recorderState !== 'recording' ? 'is-disabled' : recorderState}>Pause</Btn>
    </div>
    
    </BtnWrap>
    <>
    {recordings.length > 0 ? (recordings.map((recording,id) => (
            <AudioWrap key={id}>
              <audio  controls src={recording}></audio>
              <a href={recording} download={`audio-${id}.mp3`}>download</a>
            </AudioWrap>            
    ))): <audio controls src={""}></audio>}
    
    </>
    </>
    
  );
}

export default Records