import React, { Component } from 'react';
import { ENGINE_METHOD_ALL } from 'constants';

class MediaRecorder extends Component {
    state = {
        active: false,
        mediaRecorder: null,
        audioChunks: [],
        audioBlob: null,
        audioUrl: null,
        saved: false
    }
    componentDidMount() {
        this.prepareRecording()
    }
    componentWillUnmount() {
        this.emergencyStop()
    }
    prepareRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                let mediaRecorder = new MediaRecorder(stream, { type: 'audio/wav' })
                this.setState({mediaRecorder: mediaRecorder})
        })
    }

    startRecording = () => {
        this.state.mediaRecorder.start()
        this.setState({ active: true })
        this.state.mediaRecorder.addEventListener('data-available', event => {
            this.statethis.state.audioChunks.push(event.data)
        })
    }
    stopRecording = () => {
        this.state.mediaRecorder.stop()
        this.state.mediaRecorder.addEventListener('stop', () => {
            let audioBlob = new Blob(this.state.audioChunks, { type: 'audio' })
            let audioUrl = URL.createObjectURL(audioBlob)
            this.setState({ active: false })
        })
    }
    emergencyStop = () => {
        if (this.state.active === true) {
            this.state.mediaRecorder.stop()
        }
        this.setState({
            active: false,
            mediaRecorder: null,
            audioBlob: [],
            audioUrl: null,
        })
    }

    render() {
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
                      <audio src={this.state.audioUrl} controls />
                      <button onClick={() => this.postRecording()}>Save Recording</button>
                    </>
                }
                {(this.state.audioUrl && this.state.saved) &&
                <h3>Recording saved!</h3>
                }
           </div>
        </>
    }
}