import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button, Card, Row, Col } from 'react-bootstrap/';

import api from '../../services/api';

import CardImage from '../../components/cardImage';
import { Products } from './styles.js';

export default class Foods extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    api.get('/products/category/4').then(response => {
      this.setState({ products: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <Products>
          <h2>Alimentos</h2>

          <Row>
            {products.map(item => (
              <Col md={2} key={item.product.name}>
                <Card style={{ width: '18rem' }}>
                  <CardImage>
                    <Card.Img src={item.product.image} />
                  </CardImage>
                  <Card.Body>
                    <Card.Title>{item.product.name}</Card.Title>
                    <Card.Text>
                      R$
                      <span>
                        {new Intl.NumberFormat('pr-BR').format(
                          item.product.price
                        )}
                      </span>
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
