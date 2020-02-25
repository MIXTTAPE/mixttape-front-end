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
      <li key={song.nativeId} className="song-item">
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
      <h2>Mixtape Title</h2>
      <ul className="mixtape-songs">
        {mixtapeSongs ? mixtapeSongs : 'Oh no! An empty playlist! You should probably add some songs.'}
      </ul>
      {/* <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p> */}
      <button className="button-primary">Save</button>
      {/* <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p> */}
    </>
  );
}
