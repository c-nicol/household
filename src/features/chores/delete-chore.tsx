import { Button } from '@/components/button';
import { useStore } from '@/store/store';
import { IconTrash } from '@tabler/icons-react';

type Props = {
  choreId: string;
};

export function DeleteChore({ choreId }: Props) {
  const deleteChore = useStore.getState().removeChore;

  return (
    <Button
      className="p-3"
      variant="destructive"
      onClick={() => {
        deleteChore(choreId);
      }}
    >
      <IconTrash className="h-4 w-4" />
    </Button>
  );
}
