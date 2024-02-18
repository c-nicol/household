import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog';
import { Button } from '@/components/button';
import { useStore } from '@/store/store';
import { IconTrash } from '@tabler/icons-react';
import { toast } from 'sonner';

type Props = {
  choreId: string;
};

export function DeleteChore({ choreId }: Props) {
  const deleteChore = useStore.getState().removeChore;

  const handleDeleteChore = () => {
    deleteChore(choreId);
    toast.success('Chore has been deleted');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-3" variant="destructive">
          <IconTrash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteChore}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
