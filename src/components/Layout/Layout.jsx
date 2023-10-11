import Load from 'components/Load/Load';
import React, { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import { Container, List } from './Layout.styled';

 const Layout = () => {
  return (
    <>
      <header>
        <Container >
          <nav>
            <List>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </List>
          </nav>
        </Container>
      </header>
      <main>
        <Suspense fallback={<Load />}>
        <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;