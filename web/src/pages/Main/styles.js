import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 80px auto;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  a {
    text-decoration: none;
    color: blue;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background: #00a7ca;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  svg {
    margin-right: 10px;
  }
`;

export const Table = styled.table``;
