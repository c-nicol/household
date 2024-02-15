import { Button } from '@/components/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { useStore } from '@/store/store';

export function ChoresBoard() {
  const chores = useStore((state) => state.chores);

  console.log('chores', chores);

  return (
    <>
      <div className="h-full gap-y-4 rounded-xl border border-dashed p-4">
        <Chores />
      </div>
    </>
  );
}

function Chores() {
  const chores = useStore((state) => state.chores);
  const removeChore = useStore((state) => state.removeChore);

  if (!chores.length) return <div>No chores</div>;

  return (
    <>
      {chores.map((chore) => (
        <Card key={chore.id}>
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
      ))}
    </>
  );
}
