import styled from 'styled-components';
import BootstrapNav from 'react-bootstrap/Nav';

export const Nav = styled(BootstrapNav)`
  background: #fff;
  border-bottom: solid 1px #e5e5e5;
  padding-left: 20px !important;
  height: 70px;

  div {
    display: inline-block;
    min-width: 85px;
    vertical-align: middle;
    text-align: center;

    a {
      color: #666;

      svg {
        font-size: 36px;
      }

      span {
        display: block;
        font-size: 13px;
        margin-top: 5px;
      }
    }

    a:hover {
      color: #06a2ff;
    }
  }
`;
