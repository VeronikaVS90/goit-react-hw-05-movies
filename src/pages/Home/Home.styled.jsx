import styled from "@emotion/styled";

export const HomeTitle = styled.h1`
  margin: 0 0 20px;
  padding: 0;
`;

export const TrendingList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TrendingListItem = styled.li`
  margin-bottom: 10px;
  padding: 0;

  list-style: none;
  a {
    text-decoration: none;
    color: #000000;
    &:visited {
      color: #999999;
    }

    &:hover,
    &:focus {
      color: red;
    }
  }
`;