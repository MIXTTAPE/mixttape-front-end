import React from 'react';

export default function Nav() {

  return (
    <>
      <nav>
        <h1>This is the Nav Component</h1>
        <h3>a link to create</h3>
        <h3>a link to Tapes List</h3>
        <h3>a link to about us</h3>
        <h3>a link to the splash page</h3>
        <p>create and tape list should be conditionall rendered based on a user being logged in.</p>
      </nav>
    </>
  );
}
