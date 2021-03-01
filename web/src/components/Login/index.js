import React, { useState } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Form } from 'react-bootstrap/';

import api from '../../services/api';

import { Button, Modal } from './styles';

const Login = props => {
  const [state, setState] = useState({
    isSending: false,
    email: '',
    password: '',
  });

  const handleEmailChange = e => {
    setState({ email: e.target.value });
  };

  const handlePasswordChange = e => {
    setState({ password: e.target.value });
  };

  const sendRequest = () => {
    if (state.isSending) return;
    setState({ isSending: true });

    api
      .post('/sessions', {
        email: state.email,
        password: state.password,
      })
      .then(response => {
        console.log(response.data);
      });

    setState({ isSending: false });
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Entrar</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              onChange={handleEmailChange}
              value={state.email}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              onChange={handlePasswordChange}
              value={state.password}
            />
          </Form.Group>

          <Button
            variant="primary"
            disabled={state.isSending}
            className="btn-block"
            onClick={sendRequest}
          >
            <FaSignInAlt />
            Entrar
          </Button>
        </Form>
        <p className="text-center">
          Esqueceu sua senha? <a href="#">Clique aqui</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        Ainda não possui cadastro?
        <Button variant="success" block>
          <FaUserPlus /> Cadastre-se
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
