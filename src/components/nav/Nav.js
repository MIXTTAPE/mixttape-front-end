import React from 'react';

export default function Nav() {

  return (
    <>
      <nav>
        <h3>This is the Nav Component</h3>
        <h4>a link to create</h4>
        <h4>a link to Tapes List</h4>
        <h4>a link to about us</h4>
        <h4>a link to the splash page</h4>
        <p>create and tape list should be conditionall rendered based on a user being logged in.</p>
      </nav>
    </>
  );
}
