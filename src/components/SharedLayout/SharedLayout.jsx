import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavList,
  NavigationLink,
} from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Please wait...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;