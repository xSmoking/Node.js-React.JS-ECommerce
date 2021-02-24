import React from 'react';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import { Form, FormControl, Button } from 'react-bootstrap/';

import { Topnav, ShoppingBag } from './styles';

const Topbar = () => {
  return (
    <Topnav>
      <Topnav.Brand href="#home">
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
      </Topnav.Collapse>
      <Topnav.Collapse className="justify-content-end">
        <ShoppingBag>
          <FaShoppingBag />
        </ShoppingBag>
      </Topnav.Collapse>
    </Topnav>
  );
};

export default Topbar;
