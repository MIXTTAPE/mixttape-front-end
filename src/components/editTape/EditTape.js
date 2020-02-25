import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape } from '../../actions/editedMixtapeActions.js';

export default function EditTape() {
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();
  

  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map(song => (
      <li key={song.nativeId} className="song-item">
        <MixtapeSong data={song} />
      </li>
    ));
  }

  const handleSave = () => {
    dispatch(saveMixtape(mixtape));
  };

  return (
    <>
      <h2>Mixtape Title</h2>
      <ul className="mixtape-songs">
        {mixtapeSongs ? mixtapeSongs : 'Oh no! An empty playlist! You should probably add some songs.'}
      </ul>
      {/* <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p> */}
      <button className="button-primary" onClick={handleSave}>Save</button>
      {/* <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p> */}
    </>
  );
}
