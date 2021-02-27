import React, { useState, useCallback } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Form } from 'react-bootstrap/';

import api from '../../services/api';

import { Button, Modal } from './styles';

const Login = props => {
  const [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    // update state
    setIsSending(true);
    // send the actual request
    await api.sendRequest();
    // once the request is sent, update state again
    setIsSending(false);
  }, [isSending]); // update the callback if the state changes

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Entrar</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
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
