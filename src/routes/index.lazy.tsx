import { ChoresBoard } from '@/features/chores/board/chores-board';
import { ChoresSidebar } from '@/features/chores/sidebar/chores-sidebar';
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
            {/* TODO: Remove arbitrary height */}
            <section className="h-[1080px] pb-24 pt-24">
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
