import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import NoMatch from './NoMatch';
import Example from './Example';
import Home from './Home';

export default () => (
  <App>
  	<Switch>
      <Route exact path="/"component={Home} />
      <Route path="/example" component={Example} />
      <Route status={404} component={NoMatch} />
    </Switch>
  </App>
);
