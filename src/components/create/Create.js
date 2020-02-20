import React from 'react';
import SearchSongs from '../searchSongs/SearchSongs.js';
import EditTape from '../editTape/EditTape.js';

export default function Create() {

  return (
    <>
      <h2>This is the Create Page</h2>
      <SearchSongs />
      <EditTape />
      <h3>Memo section goes here?</h3>
    </>
  );
}
