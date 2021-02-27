import React, { useState, useCallback } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Form } from 'react-bootstrap/';

import api from '../../services/api';

import { Button, Modal } from './styles';

const Login = props => {
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);

    api
      .post('/sessions', {
        email,
        password,
      })
      .then(response => {
        console.log(response.data);
      });

    setIsSending(false);
  }, [email, isSending, password]);

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
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              onChange={handlePasswordChange}
              value={password}
            />
          </Form.Group>

          <Button
            variant="primary"
            disabled={isSending}
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
