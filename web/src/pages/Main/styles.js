import styled from 'styled-components';
import MultiCarousel from 'react-multi-carousel/lib/Carousel';

export const Products = styled.div`
  margin: 20px 0 40px 0;
  color: #666;
  padding: 0 30px;

  h3 {
    a {
      margin-left: 10px;
      font-size: 18px;

      svg {
        vertical-align: -10%;
      }
    }
  }
`;

export const ItemCarousel = styled(MultiCarousel)`
  margin-top: 20px;

  .card {
    display: inline-block !important;
    height: 450px;
  }

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
`;

export const CardImage = styled.div`
  text-align: center;
  height: 300px;

  img {
    max-height: 300px !important;
    max-width: 100% !important;
    width: auto !important;
    padding: 10px;
  }
`;
