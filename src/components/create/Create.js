import React, { useEffect } from 'react';
import SearchSongs from '../searchSongs/SearchSongs.js';
import { useSelector, useDispatch } from 'react-redux';
import EditTape from '../editTape/EditTape.js';
import MediaRecorder from '../mediaRecorder/MediaRecorder';
import { isAuthenticated, getUserLoading } from '../../selectors/userSelectors';
import { Redirect } from 'react-router-dom';
import { verifyUser } from '../../actions/userActions.js';

export default function Create() {
  const authenticated = useSelector(isAuthenticated);
  const userLoading = useSelector(getUserLoading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(verifyUser());
  }, []);

  if(userLoading){
    return (
      <div className="empty-section">
        <h2>Loading...</h2>
      </div>
    );
  }

  if(!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="create-section">
      <div className="search-songs-section box-shadow">
        <p>Add a Voice Memo</p>
        <MediaRecorder />
        <SearchSongs />
      </div>
      <div className="edit-mixtape-section">
        <EditTape />
      </div>
    </div>
  );
}
