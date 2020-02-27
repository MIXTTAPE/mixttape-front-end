import React from 'react';
import SearchSongs from '../searchSongs/SearchSongs.js';
import { useSelector } from 'react-redux';
import EditTape from '../editTape/EditTape.js';
import MediaRecorder from '../mediaRecorder/MediaRecorder';
import { isAuthenticated } from '../../selectors/userSelectors';
import { Redirect } from 'react-router-dom';

export default function Create() {
  const authenticated = useSelector(isAuthenticated);

  if(!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="create-section">
      <div className="search-songs-section box-shadow">
        <p>Add a Voice Memo</p>
        <MediaRecorder />
        <SearchSongs />
      </div>
      <div className="edit-mixtape-section">
        <EditTape />
      </div>
    </div>
  );
}
