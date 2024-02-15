import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/chores')({
  component: Chores,
});

function Chores() {
  return <div className="p-2">Chores Page</div>;
}
