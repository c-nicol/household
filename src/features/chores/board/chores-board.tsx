import { Card, CardDescription, CardHeader, CardTitle } from '@/components/card';
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

  if (!chores.length) return <div>No chores</div>;

  return (
    <>
      {chores.map((chore) => (
        <Card key={chore.id}>
          <CardHeader>
            <CardTitle>{chore.title}</CardTitle>
            <CardDescription>{chore.area}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
