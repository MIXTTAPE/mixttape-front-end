import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape, mixtapeLoadingDone } from '../../actions/editedMixtapeActions.js';
import { getUser, getUserMixtapes } from '../../selectors/userSelectors.js';
import { useHistory } from 'react-router-dom';

export default function EditTape() {
  const user = useSelector(getUser);
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();
  const history = useHistory();
  const mixtapes = useSelector(getUserMixtapes);

  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map(song => (
      <li key={song.nativeId} className="song-item">
        <MixtapeSong data={song} />
      </li>
    ));
  }

  const handleSave = () => {
    mixtape.createdBy = user.username;
    mixtape.userId = user._id;
    dispatch(saveMixtape(mixtape));
    dispatch(mixtapeLoadingDone());
    history.replace(`/app/mixtape/${mixtapes[mixtapes.length - 1]._id}`);
  };

  const handleNameChange = ({ target }) => {
    mixtape.mixtapeName = target.value;
  };

  return (
    <>
      <input type='text' placeholder='Mixtape Name' onChange={handleNameChange} value={mixtape.name} />
      <ul className="mixtape-songs">
        {mixtapeSongs ? mixtapeSongs : 'Oh no! An empty playlist! You should probably add some songs.'}
      </ul>
      <button className="button-primary" onClick={handleSave}>Save</button>
    </>
  );
}
