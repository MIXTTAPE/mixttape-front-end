import React from 'react';
import { mixtapes } from './fakeMixtapes';

export default function TapeList() {
  const songElements = mixtapes.map((mixtape, i) => {
    return mixtape.songs.map((song, j) => {
      return (
        <li key={j} >
          <img src={song.thumbnailUrl} placeholder='Song'></img>
        </li>
      );
    });
  });

  const mixtapeCards = mixtapes.map((mixtape, i) => (
    <li key={i}>
      <h2>Mixtape Name:{mixtape.mixtapeName}</h2>
      <h3>Created By: {mixtape.createdBy}</h3>
      <ul>
        {songElements[i]}
      </ul>

    </li>
  ));

  return (
    <>
      <ul>
        {mixtapeCards}
        <h2>This is the TapeList</h2>
        <p>Each list item is a mixtape</p>
        <p>Clicking an item should redirect to its detail page</p>
        <button>Play</button>
        <p>play button should add playlist to state and begin playing first song</p>
        <button>Edit</button>
        <p>edit button sould redirect to the create page with selected playlist loaded ready for editing</p>
      </ul>
    </>
  );
}
