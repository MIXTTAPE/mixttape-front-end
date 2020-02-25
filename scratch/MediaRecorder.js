import React, { Component } from 'react';

export default class MediaRecorder extends Component {
    state = {
      active: false,
      mediaRecorder: null,
      audioChunks: [],
      audioBlob: null,
      audioUrl: null,
      saved: false,
      title:''
    }
    componentDidMount() {
      this.prepareRecording();
    }
    componentWillUnmount() {
      this.emergencyStop();
    }
    prepareRecording = () => {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          let mediaRecorder = new window.MediaRecorder(stream);
          mediaRecorder.ondataavailable = e => {
            this.setState(state => ({
              audioChunks:[...state.audioChunks, e.data]
            }));
          };
          mediaRecorder.onstop = () => {
            let audioBlob = new Blob(this.state.audioChunks, { type: 'audio/mpeg-3' });
            let audioUrl = URL.createObjectURL(audioBlob);
            this.setState({ audioBlob: audioBlob, audioUrl: audioUrl });
          };
          this.setState({ mediaRecorder: mediaRecorder });
        });
    }

    startRecording = () => {
      this.state.mediaRecorder.start();
      this.setState({ active: true });
   
    }
    stopRecording = () => {
      this.state.mediaRecorder.stop();
      this.setState({ active: false });
    }
    emergencyStop = () => {
      if(this.state.active === true) {
        this.state.mediaRecorder.stop();
      }
      this.setState({
        active: false,
        mediaRecorder: null,
        audioBlob: [],
        audioUrl: null,
      });
    }
    createFileFromBlob = () => {
      let file = new window.File([this.state.audioBlob], 'test.wav', { type: 'audio/wav' });
      return file;
    }
    postRecording = () => {
    //   let recording = this.createFileFromBlob();
      let formData = new FormData();
      formData.append('id', this.state.audioUrl);
      formData.append('recording', this.state.audioBlob);
      formData.append('title', this.state.title);
      return fetch('https://cors-anywhere.herokuapp.com/https://mixttape-backend.herokuapp.com//api/v1/voice-recordings', {
        method: 'POST',
        body: formData
      }).then(res => {
        this.setState({ saved: true });
        console.log(res);
      });
    }


    render() {
      return (
        <>
          <div>
            
            {(!this.state.active && !this.state.audioUrl) &&
                <button onClick={this.startRecording}>Start Recording</button>
            }
            {(this.state.active && !this.state.audioUrl) &&
                <button onClick={this.stopRecording}>Stop Recording</button>
            }
            {(this.state.audioUrl && !this.state.saved) && 
                      <>
                        <input type='text' value={this.state.title} onChange={() => this.setState({ title: event.target.value })} />
                        <audio src={this.state.audioUrl} controls />
                        <button onClick={() => this.postRecording()}>Save Recording</button>
                      </>
            }
            {(this.state.audioUrl && this.state.saved) &&
                      <>
                        <h3>Recording saved!</h3>
                        <button onClick={() => this.setState({ active: false, audioUrl: null, saved: false, audioChunks:[], audioBlob: null })} >Record Another</button>
                      </>
            }
          </div>
        </>
      );}
}
