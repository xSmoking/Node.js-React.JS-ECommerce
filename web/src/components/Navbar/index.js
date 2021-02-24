import React from 'react';
import {
  FaHome,
  FaCoffee,
  FaUtensils,
  FaPaw,
  FaIceCream,
} from 'react-icons/fa';

import { Nav } from './styles';

const Navbar = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <FaHome /> <span>Início</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/alimentos">
          <FaUtensils /> <span>Alimentos</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/animais">
          <FaPaw /> <span>Animais</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FaCoffee /> <span>Bebidas</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FaIceCream /> <span>Guloseimas</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
