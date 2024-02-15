import { Footer } from '@/features/layout/footer';
import { Header } from '@/features/layout/header';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
});
