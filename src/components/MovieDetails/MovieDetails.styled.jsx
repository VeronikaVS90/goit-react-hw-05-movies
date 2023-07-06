import styled from '@emotion/styled';

export const MovieDetailsSection = styled.section`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 15px;
`;

export const MovieDetailsInfo = styled.div`
  max-width: 80%;
`;

export const AdditionalInfo = styled.div`
  width: 100%;
`;

export const AdditionalList = styled.ul`
  font-size: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const AdditionalListItem = styled.li`
  margin-bottom: 10px;
  padding: 0;

  list-style: none;
  a {
    text-decoration: none;
    color: #000000;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: red;
    }
  }
`;