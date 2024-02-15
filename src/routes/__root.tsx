import { Header } from '@/features/layout/header';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="max-w-7xl">
        <Outlet />
      </div>
    </>
  ),
});
