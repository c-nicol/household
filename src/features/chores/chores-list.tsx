import { Alert, AlertDescription, AlertTitle } from '@/components/alert';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/card';
import type { Chore as ChoreType } from '@/store/chores-slice';
import { useStore } from '@/store/store';
import { IconAlertCircle } from '@tabler/icons-react';
import { DeleteChore } from './delete-chore';
import { EditChore } from './edit-chore';

export function ChoresList() {
  const chores = useStore((state) => state.chores);
  const filters = useStore((state) => state.areaFilters);
  const durationRange = useStore((state) => state.durationRange);

  // TODO: Configure this within slice rather than in component
  const filteredChores = chores
    .filter((chore) => filters.includes(chore.area))
    .filter((chore) => chore.duration >= durationRange[0] && chore.duration <= durationRange[1]);

  if (!chores.length)
    return (
      <Alert>
        <IconAlertCircle className="h-4 w-4" />
        <AlertTitle>No chores found</AlertTitle>
        <AlertDescription>Create a Chore to display</AlertDescription>
      </Alert>
    );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {filteredChores.map((chore) => (
        <Chore key={chore.id} chore={chore} />
      ))}
    </div>
  );
}

type ChoreProps = {
  chore: ChoreType;
};

function Chore({ chore }: ChoreProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex flex-col gap-y-1">
          <CardTitle>{chore.title}</CardTitle>
          <CardDescription>{chore.area}</CardDescription>
        </div>

        <div className="flex gap-x-2">
          <EditChore choreId={chore.id} />
          <DeleteChore choreId={chore.id} />
        </div>
      </CardHeader>
    </Card>
  );
}
