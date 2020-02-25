import React, { useState, useEffect } from 'react';

const MediaRecorder = () => {
  const [active, setActive] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState('');

  const prepareRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        let mediaRecorder = new window.MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => {
          setAudioChunks(prevState => ({
            audioChunks:[...prevState.audioChunks, e.data]
          }));
        };
        mediaRecorder.onstop = () => {
          let audioBlob = new Blob(audioChunks, { type: 'audio/mpeg-3' });
          let audioUrl = URL.createObjectURL(audioBlob);
          setAudioBlob({ audioBlob: audioBlob });
          setAudioUrl({ audioUrl: audioUrl });
        };
        setMediaRecorder({ mediaRecorder: mediaRecorder });
      });
  };
  useEffect(() => {
    prepareRecording();
  }, []);
    
  const emergencyStop = () => {
    if(active === true) {
      mediaRecorder.stop();
    }
    setActive({ active: false });
    setMediaRecorder({ mediaRecorder: null });
    setAudioBlob({ audioBlob: [] });
    setAudioUrl({ audioUrl:null });
  };
    
  useEffect(() => {
    return () => {
      emergencyStop();
    };
  }, []);
    
  const startRecording = () => {
    console.log(mediaRecorder);
    mediaRecorder.start();
    setActive({ active: true });
 
  };
    
  const stopRecording = () => {
    mediaRecorder.stop();
    setActive({ active: false });
  };
    
    
  const postRecording = () => {
    let formData = new FormData();
    formData.append('id', audioUrl);
    formData.append('recording', audioBlob);
    formData.appednd('title', title);
    return fetch('http://localhost:7891/api/v1/voice-recordings', {
      method: 'POST',
      body: formData
    }).then(message => {
      setSaved({ saved: true });
      console.log(message);
    });
  };
  const handleSave = () => {
    setActive({ active: false });
    setAudioUrl({ audioUrl: null });
    setSaved({ saved: false });
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
                      <input type='text' value={title} onChange={() => setTitle({ title: event.target.value })} />
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

export default MediaRecorder;
