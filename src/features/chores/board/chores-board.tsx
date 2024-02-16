import { Button } from '@/components/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import type { Chore as ChoreType } from '@/store/choresSlice';
import { useStore } from '@/store/store';

export function ChoresBoard() {
  return (
    <div className="h-full gap-y-4 rounded-xl border border-dashed p-4">
      <Chores />
    </div>
  );
}

function Chores() {
  const chores = useStore((state) => state.chores);

  if (!chores.length) return <div>No chores</div>;

  return (
    <>
      {chores.map((chore) => (
        <Chore key={chore.id} chore={chore} />
      ))}
    </>
  );
}

type ChoreProps = {
  chore: ChoreType;
};

function Chore({ chore }: ChoreProps) {
  const removeChore = useStore((state) => state.removeChore);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{chore.title}</CardTitle>
        <CardDescription>{chore.area}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          variant="destructive"
          onClick={() => {
            removeChore(chore.id);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
