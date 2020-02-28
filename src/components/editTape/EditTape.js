import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape, mixtapeLoadingDone } from '../../actions/editedMixtapeActions.js';
import { getUser, getUserMixtapes } from '../../selectors/userSelectors.js';
import { useHistory } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';

// import { DndProvider } from 'react-dnd';
// import Backend from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';

export default function EditTape() {
  const user = useSelector(getUser);
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();
  const history = useHistory();
  const mixtapes = useSelector(getUserMixtapes);
  const [mixtapeNameInput, setMixtapeNameInput] = useState();
  const [mixtapeNameError, setMixtapeNameError] = useState();
  const firstRender = useRef(true);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    },
    [cards],
  )
  
  useEffect(() => {
    if(firstRender.current === false) {
      history.replace(`/app/mixtape/${mixtapes[mixtapes.length - 1]._id}`);
    } else {
      firstRender.current = false;
    }
  }, [mixtapes]);
  
  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map((song, i) => {
      const id = uuidv4();
      return (
        <li key={id} className="song-item">
          <MixtapeSong data={song} id={id} index={i} moveCard={moveCard} />
        </li>
      );
    } 
    );
  }

  const handleSave = () => {
    if(!mixtapeNameInput) {
      setMixtapeNameError('Please enter a mixtape name.');
    } else {
      mixtape.createdBy = user.username;
      mixtape.userId = user._id;
      dispatch(saveMixtape(mixtape));
      dispatch(mixtapeLoadingDone());
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
