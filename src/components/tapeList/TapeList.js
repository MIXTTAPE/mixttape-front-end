import React from 'react';
import { mixtapes } from './fakeMixtapes';
import { useSelector } from 'react-redux';
import { getUserMixtapes } from '../../selectors/userSelectors';

export default function TapeList() {

  // const mixtapes = useSelector(getUserMixtapes);

  if(mixtapes.length === 0) {
    return (
      <h2>Hmm.... looks like you don`&apos;`t have any mixtapes. Create one?</h2>
    );
  }

  const mixtapeCards = mixtapes.map(mixtape => {
    return (
      <li key={mixtape._id}>
        <
      </li>
    );
  });

  return (
    <>
      <ul>
        <li></li>
      </ul>
    </>
  );
}
