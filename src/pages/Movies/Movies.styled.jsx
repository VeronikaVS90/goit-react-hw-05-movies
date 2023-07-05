import styled from '@emotion/styled';

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 15px;
  padding: 15px;
  margin: 0 15px 0px 0;
`;

export const SubmitInput = styled.input`
  cursor: pointer;

  border-radius: 15px;
  padding: 15px;
  border: 2px solid black;
  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

export const ResultsList = styled.ul`
  margin: 0;
  margin-top: 10px;
  list-style: none;
  padding: 0;

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: #000000;
    text-decoration: none;
    &:hover,
    :focus {
      color: red;
    }
  }
`;