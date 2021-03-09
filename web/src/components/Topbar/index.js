import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaShoppingBag, FaSearch, FaUser } from 'react-icons/fa';
import { Form, FormControl, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import Login from '../Login';
import { Topnav, ShoppingBag, Dropdown } from './styles';

const Topbar = ({ navigation, cartSize }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <React.Fragment>
      <Topnav>
        <Topnav.Brand href="/#">
          <FaShoppingBag /> Market
        </Topnav.Brand>
        <Topnav.Toggle aria-controls="basic-navbar-nav" />
        <Topnav.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Buscar um produto"
              className="mr-sm-2"
            />
            <Button variant="outline-primary">
              <FaSearch /> Buscar
            </Button>
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <FaUser /> Conta
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={() => setShowLogin(true)}>
                Entrar
              </Dropdown.Item>
              <Dropdown.Item href="#">Cadastre-se</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Topnav.Collapse>
        <Topnav.Collapse className="justify-content-end">
          <Link to="/carrinho">Cart</Link>
          <ShoppingBag>
            <FaShoppingBag />
            R$ {formatPrice(0.0)} - {cartSize}
          </ShoppingBag>
        </Topnav.Collapse>
      </Topnav>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Topbar);
