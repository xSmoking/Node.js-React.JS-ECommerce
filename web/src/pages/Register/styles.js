import styled, { createGlobalStyle } from 'styled-components';
import { FaSignInAlt } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #eee !important;
  }
`;

export const SignInIcon = styled(FaSignInAlt)`
  vertical-align: -10%;
  margin-right: 7px;
`;

export const LoginCard = styled(Card)`
  width: 500px;
  margin: 30px auto;
`;
