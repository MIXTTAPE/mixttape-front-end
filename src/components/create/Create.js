import React from 'react';
import SearchSongs from '../searchSongs/SearchSongs.js';
import EditTape from '../editTape/EditTape.js';

export default function Create() {

  return (
    <div className="create-section">
      <div className="search-songs-section box-shadow">
        <p>Add a Voice Memo</p>
        <SearchSongs />
      </div>
      <div className="edit-mixtape-section">
        <EditTape />
      </div>
    </div>
  );
}
