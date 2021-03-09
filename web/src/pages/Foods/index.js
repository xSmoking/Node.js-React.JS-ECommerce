import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button, Card, Row, Col } from 'react-bootstrap/';

import api from '../../services/api';

import { formatPrice } from '../../util/format';
import CardImage from '../../components/cardImage';
import { Products } from './styles.js';

export default class Foods extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    api.get('/products/category/4').then(response => {
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <Products>
          <h2>Alimentos</h2>

          <Row>
            {products.map(product => (
              <Col md={2} key={product.name}>
                <Card style={{ width: '18rem' }}>
                  <CardImage>
                    <Card.Img src={product.image} />
                  </CardImage>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      R$
                      <span>{product.priceFormatted}</span>
                    </Card.Text>
                    <div>
                      <Button variant="outline-primary">
                        <FaPlus /> Adicionar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Products>
      </React.Fragment>
    );
  }
}
