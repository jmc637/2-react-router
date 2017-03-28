import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={AppContainer}>
      <Router path='albums' component={Albums} />
      <Router path='albums/:albumId' component={Album} />
      <IndexRedirect to={'albums'}/>
    </Router>
  </Router>,
  document.getElementById('app')
);
