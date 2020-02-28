import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPlaying, setAsActive, setSongIndex } from '../../actions/activeMixtapeActions';
import { getPlaying, getActiveMixtape, getActiveLoading, getFetchError } from '../../selectors/activeMixtapeSelectors';
import { FaPlayCircle } from 'react-icons/fa';

export default function TapeDetail() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const playing = useSelector(getPlaying);
  const loading = useSelector(getActiveLoading);
  const activeMixtape = useSelector(getActiveMixtape);
  const fetchError = useSelector(getFetchError);

  const handlePlay = () => {
    dispatch(setSongIndex(0));
    if(!playing) {
      dispatch(setPlaying());
    }
  };
  
  useEffect(() => {
    dispatch(setAsActive(id));
  }, []);

  if(fetchError) {
    return (
      <div className='empty-section'>
        <h2>Hm...We couldn&apos;t find that mixtape...</h2>
      </div>
    );
  }

  if(loading) {
    return (
      <div className="empty-section">
        <h2>Loading...</h2>
      </div>
    );
  }

  const songs = activeMixtape.songs.map((song, i) => {
    return (<li key={i} className="song">
      <img src={song.thumbnailUrl} />
      {song.title}
    </li>);
  });

  return (
    <div className="mixtape-flex-container">
      <div className="mixtape-detail-container">
        <div className="mixtape-detail">
          <h2>{activeMixtape.mixtapeName}</h2>
          <h3>Total Tracks: {activeMixtape.songs.length}</h3>
          <p>created by: {activeMixtape.createdBy}</p>
          <FaPlayCircle className="play-pause" onClick={handlePlay} />
        </div>
        <ul className="list-of-songs">
          {songs}
        </ul>
      </div>
    </div>
  );
}
