import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import css from './NavBar.css';
import NavItem from './NavItem';
import { GithubLogo } from './Icons.js';
/* global CONFIG */

class NavBar extends Component {
  render() {
    return (
      <div className={css.NavBar}>
        <h1><IndexLink to="/">react-simple-resize</IndexLink></h1>
        <ul>
          <NavItem to="/example" label="Example" />
        </ul>
        <div className={css.ExternalNav}>
          <a href="http://github.com/t-obi/react-simple-resize/">
            <GithubLogo />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
