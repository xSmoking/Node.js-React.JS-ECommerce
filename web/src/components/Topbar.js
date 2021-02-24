import styled from 'styled-components';
import BootstrapNavbar from 'react-bootstrap/Navbar';

export const Topbar = styled(BootstrapNavbar).attrs(props => ({
  expand: 'md',
}))`
  background: #f9f9f9;
  border-bottom: solid 1px #e5e5e5;
  height: 70px;

  .navbar-brand {
    color: #06a2ff !important;
    font-size: 38px !important;
    margin-right: 40px;

    svg {
      vertical-align: -5%;
    }
  }

  form {
    input {
      border-radius: 50px !important;
      padding: 22px 30px !important;
      font-size: 18px;
    }

    button {
      border-radius: 50px !important;
      padding: 10px 20px !important;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const ShoppingBag = styled.div`
  background: #2da77a;
  float: right;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
`;
