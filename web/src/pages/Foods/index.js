import React, { Component } from 'react';
import {} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Carousel, Form, FormControl, Button, Card } from 'react-bootstrap/';

import api from '../../services/api';

export default class Foods extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    api.get('/products/category/4').then(response => {
      this.setState({ products: response.data });
    });
  }

  render() {
    const { products } = this.state;

    return <React.Fragment></React.Fragment>;
  }
}
