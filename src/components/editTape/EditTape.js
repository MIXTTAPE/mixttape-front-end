import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape } from '../../actions/editedMixtapeActions.js';
import { getUser } from '../../selectors/userSelectors.js';
import { useHistory } from 'react-router-dom';

export default function EditTape() {
  const user = useSelector(getUser);
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();
  const history = useHistory();
  const [mixtapeNameInput, setMixtapeNameInput] = useState();
  const [mixtapeNameError, setMixtapeNameError] = useState();

  // this is a bit of an anti-pattern.
  // the code isn't very declaritive.  It doesn't say why we redirect after mixtapes change
  // instead add the history.replace to the action creator code.
  // const firstRender = useRef(true);
  // useEffect(() => {
  //   if(firstRender.current === false) {
  //     history.replace(`/app/mixtape/${mixtapes[mixtapes.length - 1]._id}`);
  //   } else {
  //     firstRender.current = false;
  //   }
  // }, [mixtapes]);

  const mixtapeSongs = mixtape.songs.map((song, i) => (
    <li key={i} className="song-item">
      <MixtapeSong data={song} />
    </li>
  ));

  const handleSave = () => {
    if(!mixtapeNameInput) {
      setMixtapeNameError('Please enter a mixtape name.');
    } else {
      mixtape.createdBy = user.username;
      mixtape.userId = user._id;
      dispatch(saveMixtape(mixtape, history));
    }
  };

  const handleNameChange = ({ target }) => {
    mixtape.mixtapeName = target.value;
    setMixtapeNameInput(target.value);
  };

  return (
    <>
      <input type='text' placeholder='Mixtape Name' onChange={handleNameChange} value={mixtapeNameInput} />
      {mixtapeNameError && <p>{mixtapeNameError}</p>}
      <ul className="mixtape-songs">
        {mixtapeSongs.length ? 'Oh no! An empty playlist! You should probably add some songs.' : mixtapeSongs}
      </ul>
      {/* <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p> */}
      <button className="button-primary" onClick={handleSave}>Save</button>
      {/* <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p> */}
    </>
  );
}
