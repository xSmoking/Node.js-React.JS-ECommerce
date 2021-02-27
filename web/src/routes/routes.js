import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Foods from '../pages/Foods';

import Navbar from '../components/Navbar/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <Navbar />
          <Route path="/" exact component={Main} />
          <Route path="/alimentos" exact component={Foods} />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
