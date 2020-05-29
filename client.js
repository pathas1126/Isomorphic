/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './core/Router';

function run() {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  // 서버사이드 렌더링은 프로덕션에서만 진행되기 때문에 렌더메서드를 구분해서 사용
  const component = Router.match({
    path: window.location.pathname
  });
  renderMethod(component, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
