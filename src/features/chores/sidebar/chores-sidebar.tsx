import { ChoresFilters } from './chores-filters';
import { CreateChore } from './create-chore';

export function ChoresSidebar() {
  return (
    <div className="flex flex-col gap-y-4">
      <CreateChore />
      <ChoresFilters />
    </div>
  );
}
