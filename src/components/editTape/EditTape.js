import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';

export default function EditTape() {
  const mixtape = useSelector(getLastEditedMixtape);

  

  //each song comes from search result section
  //Has a nativeId, native source, and title
  
  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map(song => (
      <li key={song.nativeId}>
        <MixtapeSong data={song} />
      </li>
    ));
  }

  // let mixtapeSongs;
  // useEffect(() => {
  //   mixtapeSongs = mixtape.songs.map(song => (
  //     <li key={song.nativeId}>
  //       <MixtapeSong data={song} />
  //     </li>
  //   ));
  // }, [mixtape]);

  return (
    <>
      <h3>This is the edit MixTape section</h3>
      {/* <p>It is an unordered list of songs saved from search</p> */}
      <ul>
        {mixtapeSongs}
      </ul>
      <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p>
      <button>Save</button>
      <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p>
    </>
  );
}
