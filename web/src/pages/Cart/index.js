import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Table } from 'react-bootstrap/';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

function Cart({ cart }) {
  console.log(cart);
  return (
    <React.Fragment>
      <Container>
        <h2>Carrinho</h2>

        <Table responsive borderless>
          <thead>
            <tr>
              <th> </th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>{product.priceFormatted}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
