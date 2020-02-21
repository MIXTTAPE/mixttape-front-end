import React from 'react';
import { useSelector } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';

export default function EditTape() {
  const mixtape = useSelector();


  //each song comes from search result section
  //Has a nativeId, native source, and title
  if(mixtape.length !== 0){
    const mixtapeSongs = mixtape.map(song => (
      <li key={song.nativeId}>
        <MixtapeSong data={song} />
      </li>
    ));
  }

  return (
    <>
      <h3>This is the edit MixTape section</h3>
      {/* <p>It is an unordered list of songs saved from search</p> */}
      <ul>

      </ul>
      <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p>
      <button>Save</button>
      <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p>
    </>
  );
}
