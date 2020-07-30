import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Characters from './components/Characters'
import Character from './components/Character'
import Film from './components/Film'
import Home from './components/Home'
import NoMatch from './components/NoMatch'

const App = () => (
  <>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/film/:id' component={Film} />
    <Route exact path='/characters' component={Characters} />
    <Route exact path='/characters/:id' component={Character} />
    <Route exact path='/about' component={About} />
    <Route component={NoMatch} />
  </Switch>
  </>
)

export default App;
