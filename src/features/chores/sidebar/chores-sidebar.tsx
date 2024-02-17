import { Button } from '@/components/button';
import { IconSortDescending } from '@tabler/icons-react';
import { ChoresFilters } from './chores-filters';
import { CreateChore } from './create-chore';

export function ChoresSidebar() {
  return (
    <div className="sticky top-[160px] flex flex-col gap-y-4">
      <div className="flex justify-between gap-x-2">
        <CreateChore />
        <Button variant="link" className="p-2.5">
          <IconSortDescending className="h-5 w-5" />
        </Button>
      </div>
      <ChoresFilters />
    </div>
  );
}
