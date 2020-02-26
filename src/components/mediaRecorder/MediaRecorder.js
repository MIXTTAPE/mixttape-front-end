import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../../actions/editedMixtapeActions';

const MediaRecorderFunc = () => {
  const [active, setActive] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    prepareRecording();
    return () => {
      emergencyStop();
    };
  }, []);

  const prepareRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const chunks = [];
        let mediaRecorder = new window.MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => {
          chunks.push(e.data);
        };
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/mpeg-3' });
          let audioUrl = URL.createObjectURL(blob);
          setAudioBlob(blob);
          setAudioUrl(audioUrl);
        };
        setMediaRecorder(mediaRecorder);
      });
  };

  const emergencyStop = () => {
    if(active === true) {
      mediaRecorder.stop();
    }
    setActive(false);
    setMediaRecorder(null);
    setAudioBlob([]);
    setAudioUrl(null);
  };

  const startRecording = () => {
    mediaRecorder.start();
    setActive(true);
    setTimeout(() => {
      if(active) {
        stopRecording();
      }
    }, 30000);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setActive(false);
  };

  const postRecording = () => {
    let formData = new FormData();
    formData.append('id', audioUrl);
    formData.append('recording', audioBlob);
    formData.append('title', title);
    return fetch('http://localhost:7891/api/v1/voice-recordings', {
      method: 'POST',
      body: formData
    }).then(res => {
      setSaved(true);
      return res.json();
    }).then(recording => {
      const recordingInfo = {
        nativeId: recording.key,
        nativeSource: 'voicememo',
        buyLink: null,
        thumbnailUrl: '../src/img/microphone-image.png',
        isMemo: true,
        title,

      };
      dispatch(addSong(recordingInfo));
      setTitle('');
    });
  };

  const handleSave = () => {
    setActive(false);
    setAudioUrl(null);
    setSaved(false);
  };

  return (
    <>
      <div>

        {(!active && !audioUrl) &&
          <button onClick={startRecording}>Start Recording</button>
        }
        {(active && !audioUrl) &&
          <button onClick={stopRecording}>Stop Recording</button>
        }
        {(audioUrl && !saved) &&
          <>
            <input type='text' placeholder='Recording Name' value={title} onChange={() => setTitle(event.target.value)} />
            <audio src={audioUrl} controls />
            <button onClick={postRecording}>Save Recording</button>
          </>
        }
        {(audioUrl && saved) &&
          <>
            <h3>Recording saved!</h3>
            <button onClick={handleSave} >Record Another</button>
          </>
        }
      </div>
    </>
  );
};

export default MediaRecorderFunc;
