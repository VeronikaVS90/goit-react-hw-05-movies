import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px black;
`;

export const Header = styled.header`
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 40px;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 15px;
  text-decoration: none;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;
  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;