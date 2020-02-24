import React from 'react';
import SearchSongs from '../searchSongs/SearchSongs.js';
import EditTape from '../editTape/EditTape.js';

export default function Create() {

  return (
    <>
      <div className="search-songs-section">
        <p>Add a Voice Memo</p>
        <SearchSongs />
      </div>
      <div className="edit-playlist-section">
        <EditTape />
      </div>
    </>
  );
}
