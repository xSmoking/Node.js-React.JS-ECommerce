import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button{
    cursor: pointer;

    svg{
      margin-right: 7px !important;
      vertical-align: -10%;
    }
  }

  input{
    padding: 10px 20px !important;
  }
`;
