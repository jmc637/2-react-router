import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={AppContainer}>
      <Router path='albums' component={Albums} />
      <Router path='albums/:albumId' component={Album} />
      <Router path='artists' component={Artists} />
      <Router path='artist/:artistId' component={Artist} />

      <IndexRedirect to={'albums'}/>
    </Router>
  </Router>,
  document.getElementById('app')
);
