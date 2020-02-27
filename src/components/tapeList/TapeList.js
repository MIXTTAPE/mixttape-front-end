import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserMixtapes, getUserLoading, isAuthenticated } from '../../selectors/userSelectors';
import { setPlaying, setAsActiveNoFetch } from '../../actions/activeMixtapeActions';
import { FaPlayCircle, FaTrash } from 'react-icons/fa';
import { verifyUser, deleteUserTape } from '../../actions/userActions';

export default function TapeList() {
  const dispatch = useDispatch();
  const authenticated = useSelector(isAuthenticated);
  const mixtapes = useSelector(getUserMixtapes);
  const userLoading = useSelector(getUserLoading);

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

  if(!mixtapes || mixtapes.length === 0) {
    return (
      <div className="empty-section">
        <h3>Hmm.... looks like you don&apos;t have any mixtapes. Create one?</h3>
      </div>
      
    );
  }

  const playMixtape = (clickedMixtape) => {
    dispatch(setAsActiveNoFetch(clickedMixtape));
    dispatch(setPlaying());
  };

  const handleDelete = (id) => {
    dispatch(deleteUserTape(id));
  };

  const mixtapeCards = mixtapes.map((mixtape, i) => {
    return (
      <li className="mixtape-detail-container box-shadow" key={i}>
        <div className="mixtape-detail">
          <h2>{mixtape.mixtapeName}</h2>
          <h3>Total Tracks: {mixtape.songs.length}</h3>
          <p>created by: {mixtape.createdBy}</p>
          <FaPlayCircle className="play-pause margin-bottom-15" onClick={() => playMixtape(mixtape)} />
          <Link className="button-primary-sm block" to={`/app/mixtape/${mixtape._id}`}>View Mixtape</Link>
          <Link className="button-delete block" to={'/app/mixtapes'} onClick={() => handleDelete(mixtape._id)}><FaTrash /></Link>
        </div>
        <ul className="list-of-songs">
          {mixtape.songs.map((song, i) => {
            return (<li key={i} className="song">
              <img src={song.thumbnailUrl} />
              {song.title}
            </li>);
          })}
        </ul>
      </li>
    );
  });
  
  return (
    <ul className="mixtapes-flex-container">
      {mixtapeCards}
    </ul>
  );
}
