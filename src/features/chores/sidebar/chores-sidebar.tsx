import { AreaFilter } from './area-filter';
import { CreateChore } from './create-chore';
import { DurationFilter } from './duration-filter';

export function ChoresSidebar() {
  return (
    <div className="sticky top-[160px] flex flex-col gap-y-4">
      <CreateChore />
      <div className="flex flex-col gap-y-6">
        <AreaFilter />
        <DurationFilter />
      </div>
    </div>
  );
}
