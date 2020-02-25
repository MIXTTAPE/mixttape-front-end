import React from 'react';
import { fakeMixtape as activeMixtape } from '../../../scratch/fake-mixtape';
import { FaPlayCircle } from 'react-icons/fa';

export default function TapeDetail() {
  const songs = activeMixtape.songs.map((song) => {
    return (<li key={song.nativeId} className="song">
      <img src={song.thumbnailUrl} />
      {song.title}
    </li>);
  });

  return (
    <div className="mixtape-flex-container">
      <div className="mixtape-detail-container box-shadow">
        <div className="mixtape-detail">
          <h2>{activeMixtape.mixtapeName}</h2>
          <h3>Total Tracks: {activeMixtape.songs.length}</h3>
          <p>created by: {activeMixtape.createdBy}</p>
          <FaPlayCircle />
        </div>
        <ul className="list-of-songs">
          {songs}
        </ul>
      </div>
    </div>
  );
}

{/* <ul>
  <h2>This is the TapeDetail Page</h2>
  <p>Each item is a song</p>
</ul>
  <h3>There should be a section for displaying ratings</h3>
  <p>There should be a way to rate a mixtape</p>
  <p>There should be a list of tags?</p>
  <p>There should be a way to add tags without having to edit the mixtape?</p>
  <button>Share</button>
  <p>The share button should generate a link to share with  mixtape</p>
  <button>Play</button>
  <p>The play button sould play the playlist from the beginning</p> */}
