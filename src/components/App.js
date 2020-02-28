import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mixt from './mixt/Mixt';
import Splash from './splash/Splash';
import AboutUs from './aboutUs/AboutUs';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route path="/app" component={Mixt} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
}
