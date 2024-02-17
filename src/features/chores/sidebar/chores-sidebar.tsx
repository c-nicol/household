import { ChoresFilters } from './chores-filters';
import { CreateChore } from './create-chore';

export function ChoresSidebar() {
  return (
    <div className="sticky top-[160px] flex flex-col gap-y-4">
      <CreateChore />
      <ChoresFilters />
    </div>
  );
}
