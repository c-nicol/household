import { Button } from '@/components/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import type { Chore as ChoreType } from '@/store/choresSlice';
import { useStore } from '@/store/store';

export function ChoresBoard() {
  const chores = useStore((state) => state.chores);

  if (!chores.length) return <div>No chores</div>;

  return (
    <div>
      <ul className="flex h-full flex-col gap-y-4">
        {chores.map((chore) => (
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
