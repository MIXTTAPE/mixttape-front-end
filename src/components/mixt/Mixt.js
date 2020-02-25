import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header.js';
import Create from '../create/Create.js';
import TapeList from '../tapeList/TapeList.js';
import TapeDetail from '../tapeDetail/TapeDetail.js';
import Player from '../player/Player.js';
import '../../styles/styles.css';

export default function Mixt() {

  return (
    <Router>
      <Header />  
      <Switch> 
        <Route path="/app/my-mixtapes" component={TapeList} />
        <Route path="/app/create" component={Create} />
        <Route path="/app/mixtape/" component={TapeDetail} />
      </Switch>
      <Player />
    </Router>
  );
}
