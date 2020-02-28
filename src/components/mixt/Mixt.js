import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';
import TapeDetail from '../tapeDetail/TapeDetail.js';
import Player from '../player/Player.js';
import '../../styles/styles.css';

export default function Mixt() {

  return (
    <>
      <Header />  
      <Switch> 
        <Route path="/app/mixtapes" component={TapeList} />
        <Route path="/app/create" component={Create} />
        <Route path="/app/mixtape/:id" component={TapeDetail} />
      </Switch>
      <Player />
    </>
  );
}
