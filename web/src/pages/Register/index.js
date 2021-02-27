import React, { Component } from 'react';
//import { FaSignInAlt } from 'react-icons/fa';

//import api from '../../services/api';

import { GlobalStyle, SignInIcon, LoginCard } from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default class Main extends Component {
  state = {
    username: '',
    password: '',
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log(username + ' - ' + password);
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle></GlobalStyle>
        <Container>
          <LoginCard style={{ with: '18rem' }}>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formLoginEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Endereço de e-mail"
                    />
                  </Form.Group>

                  <Form.Group controlId="formLoginPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    <SignInIcon /> Entrar
                  </Button>
                </Form>
              </Card.Text>
              <Card.Link href="#">Não é cadastrado? Crie uma conta</Card.Link>
              <Card.Link href="#">Esqueci a senha</Card.Link>
            </Card.Body>
          </LoginCard>
        </Container>
      </React.Fragment>
    );
  }
}
