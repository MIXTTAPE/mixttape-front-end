import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';
import TapeDetail from '../tapeDetail/TapeDetail.js';
import Player from '../player/Player.js';
import '../../styles/global.css';

export default function Mixt() {

  return (
    <Router>
      <Header />   
      <Route path="/app/create" component={Create} />
      <Route path="/app/my-mixtapes" component={TapeList} />
      <Route path="/app/mixtape/:id" component={TapeDetail} />
      <Player />
    </Router>
  );
}
