import styled from 'styled-components';

export const Products = styled.div`
  margin: 20px 0 40px 0;
  color: #666;
  padding: 0 30px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;

    a {
      margin-left: 10px;
      font-size: 18px;

      svg {
        vertical-align: -10%;
      }
    }
  }

  .card {
    margin-bottom: 20px;

    .card-body {
      vertical-align: bottom;

      .card-title {
        font-size: 12px;
        text-align: center;
      }

      .card-text {
        color: #666;
        font-size: 14px;
        text-align: center;

        span {
          margin-left: 5px;
          font-size: 26px;
          font-weight: bold;
          color: #06a2ff;
        }
      }

      div {
        text-align: center;
      }

      button {
        border-radius: 50px;
        display: inline-block;

        svg {
          vertical-align: -10%;
          margin-right: 7px;
        }
      }
    }
  }
`;
