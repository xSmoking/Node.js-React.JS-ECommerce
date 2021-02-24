import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Foods from '../pages/Foods';
import Repository from '../pages/Repository';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/alimentos" exact component={Foods} />
        <Route path="/login" exact component={Login} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
