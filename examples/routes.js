import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NoMatch from './NoMatch';
import Example from './Example';
import Home from './Home';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="example" component={Example} />
    </Route>
    <Route path="*" status={404} component={NoMatch} />
  </Route>
);
