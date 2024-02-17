import { ChoresList } from '@/features/chores/chores-list';
import { ChoresSidebar } from '@/features/chores/sidebar/chores-sidebar';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div>
        <main>
          {/* TODO: Remove arbitrary height */}
          <section className="pb-24 pt-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <ChoresSidebar />
              </div>

              <div className="lg:col-span-3">
                <ChoresList />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
