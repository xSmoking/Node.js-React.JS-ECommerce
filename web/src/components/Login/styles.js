import styled from 'styled-components';
import BootstrapButton from 'react-bootstrap/Button';
import BootstrapModal from 'react-bootstrap/Modal';

export const Button = styled(BootstrapButton)`
  padding: 8px;
  font-weight: bold;
`;

export const Modal = styled(BootstrapModal)`
  .modal-content {
    border: 0;

    p {
      margin-top: 20px;
      font-size: 14px;
    }

    .modal-footer {
      padding: 20px 10px;
      justify-content: center !important;

      .btn {
        margin-top: 10px;
        font-weight: bold;

        svg {
          margin-right: 7px !important;
          vertical-align: -10%;
        }
      }
    }
  }
`;
