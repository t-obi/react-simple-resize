import React, { Component } from 'react';
import Resize from '../lib';
import css from './styles.css';

class Example extends Component {
  render() {
    
    return (
      <Resize className={css.Resize} handleColor="#247BA0">
        Resize this box with the handle on the bottom right
      </Resize>
    );
  }
}

export default Example;
