import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mixt from './mixt/Mixt';
import Splash from './splash/Splash';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route path="/app" component={Mixt} />
      </Switch>
    </Router>
  );
}
