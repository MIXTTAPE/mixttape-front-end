import React, { Component } from 'react';

class MediaRecorder extends Component {
    state = {
        active: false,
        mediaRecorder: null,
        audioChunks: [],
        audioBlob: null,
        audioUrl: null,
        saved: false
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
}