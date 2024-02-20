import { Button } from '@/components/button';
import { IconEdit } from '@tabler/icons-react';

type Props = {
  choreId: string;
};

export function EditChore({ choreId }: Props) {
  return (
    <Button variant="ghost" className="rounded-t-0 h-12 flex-1 gap-x-1 p-0">
      <IconEdit className="h-4 w-4" />
      <span>Edit</span>
    </Button>
  );
}
