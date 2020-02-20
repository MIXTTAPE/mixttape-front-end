import React from 'react';

export default function TapeList() {

  return (
    <>
      <ul>
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
