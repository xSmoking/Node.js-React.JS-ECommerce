import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Foods from '../pages/Foods';
import Cart from '../pages/Cart';

import Navbar from '../components/Navbar/index';

function Routes() {
  return (
    <Switch>
      <Route path="/carrinho" exact component={Cart} />
      <Route path="/minha-conta" exact component={Cart} />
      <Fragment>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/alimentos" exact component={Foods} />
      </Fragment>
    </Switch>
  );
}

export default Routes;
