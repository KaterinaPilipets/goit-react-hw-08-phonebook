import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './Layout.style';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <Toaster position="top-right" reverseOrder={false} />
        </Container>
      </main>
    </>
  );
};
