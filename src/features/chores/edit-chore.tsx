import { Button } from '@/components/button';
import { IconEdit } from '@tabler/icons-react';

type Props = {
  choreId: string;
};

export function EditChore({ choreId }: Props) {
  return (
    <Button
      className="p-3"
      variant="outline"
      onClick={() => {
        console.log('click');
      }}
    >
      <IconEdit className="h-4 w-4" />
    </Button>
  );
}
