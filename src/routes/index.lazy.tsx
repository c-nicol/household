import { ChoresBoard } from '@/features/chores/chores-board';
import { ChoresSidebar } from '@/features/chores/chores-sidebar';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="bg-white">
        <div>
          <main>
            <section className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <ChoresSidebar />

                <div className="lg:col-span-3">
                  <ChoresBoard />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
