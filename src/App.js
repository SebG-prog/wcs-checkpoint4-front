import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AddProjectForm from './components/AddProjectForm';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/addProject' component={AddProjectForm} />
      </Switch>
    </div>
  );
}

export default App;
