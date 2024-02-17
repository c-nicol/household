import { Alert, AlertDescription, AlertTitle } from '@/components/alert';
import { Button } from '@/components/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/card';
import type { Chore as ChoreType } from '@/store/chores-slice';
import { useStore } from '@/store/store';
import { IconAlertCircle, IconTrash } from '@tabler/icons-react';

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
    <div>
      <ul className="flex h-full flex-col gap-y-4">
        {filteredChores.map((chore) => (
          <Chore key={chore.id} chore={chore} />
        ))}
      </ul>
    </div>
  );
}

type ChoreProps = {
  chore: ChoreType;
};

function Chore({ chore }: ChoreProps) {
  const removeChore = useStore((state) => state.removeChore);

  const chores = useStore.getState().chores;

  console.log('component', chores);

  return (
    <>
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className=" flex flex-col gap-y-1">
              <CardTitle>{chore.title}</CardTitle>
              <CardDescription>{chore.area}</CardDescription>
            </div>

            <div>
              <Button
                className="p-3"
                variant="destructive"
                onClick={() => {
                  removeChore(chore.id);
                }}
              >
                <IconTrash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className=" flex flex-col gap-y-1">
              <CardTitle>{chore.title}</CardTitle>
              <CardDescription>{chore.area}</CardDescription>
            </div>

            <div>
              <Button
                className="p-3"
                variant="destructive"
                onClick={() => {
                  removeChore(chore.id);
                }}
              >
                <IconTrash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
