/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import style from './Layout.scss';

function Layout({ hero, children }) {
  return (
    <div className={style.root}>
      <header className={style.header}>
        <div>
          <span>My App</span>
          {!hero && (
            <form>
              <input type="search" />
            </form>
          )}
          <div>
            <span>Username</span>
            <img src="#" />
          </div>
        </div>
        {hero}
      </header>
      <main>{children}</main>
      <footer>
        <span>© Company Name</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
