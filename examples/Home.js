import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './styles.css';

class Home extends Component {

  render() {
    return (
      <div className={css.Home}>
        <h2>What is this? </h2>
        A react component rendering a resizable box.
        <h2> Why? </h2>
        I needed a resizable container for a small example (see <a href="http://t-obi.github.io/react-video-cover/#/resizable">react-video-cover</a>).
        Using css was not an option because the example had to work in IE,
        and the existing React components I found required too much configuration
        or had other problems. So I made a new one.
        <h2>How does it work?</h2>
        You should have a look at the <a href="https://github.com/t-obi/react-simple-resize/blob/master/README.md">readme</a> and the <Link to="/example">example</Link>.
        I also encourage you to have a look at the code, it should be relatively easy to understand.
        <div>If you have any questions or spot an error I would be glad to help.</div>
      </div>
    );
  }
}

export default Home;
