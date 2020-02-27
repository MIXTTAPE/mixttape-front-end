import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape, mixtapeLoadingDone } from '../../actions/editedMixtapeActions.js';
import { getUser, getUserMixtapes, getsavedMixtapeFlag } from '../../selectors/userSelectors.js';
import { useHistory } from 'react-router-dom';

export default function EditTape() {
  const user = useSelector(getUser);
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();
  const history = useHistory();
  const mixtapes = useSelector(getUserMixtapes);

  const firstRender = useRef(true);
  useEffect(() => {
    if(firstRender.current === false) {
      history.replace(`/app/mixtape/${mixtapes[mixtapes.length - 1]._id}`);
    } else {
      firstRender.current = false;
    }
  }, [mixtapes]);
  
  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map((song, i) => (
      <li key={i} className="song-item">
        <MixtapeSong data={song} />
      </li>
    ));
  }

  const handleSave = () => {
    mixtape.createdBy = user.username;
    mixtape.userId = user._id;
    dispatch(saveMixtape(mixtape));
    dispatch(mixtapeLoadingDone());
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
      {/* <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p> */}
      <button className="button-primary" onClick={handleSave}>Save</button>
      {/* <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p> */}
    </>
  );
}
