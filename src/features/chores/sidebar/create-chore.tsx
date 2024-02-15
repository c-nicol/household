import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { IconPlus } from '@tabler/icons-react';

export function CreateChore() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-x-2">
          <IconPlus className="h-4 w-4" />
          <span>Create Chore</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Chore</DialogTitle>
          <DialogDescription>Click submit when you're done.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" className="col-span-4" />
          </div>

          <div className="grid grid-cols-5 items-center gap-4">
            <Label className="text-right">Area</Label>
            <Select>
              <SelectTrigger className="col-span-4">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="bedroom">Bedroom</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="laundry">Laundry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-5 items-center gap-4">
            <Label className="text-right">Duration</Label>
            <Select>
              <SelectTrigger className="col-span-4">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Bathroom</SelectItem>
                  <SelectItem value="2">Bedroom</SelectItem>
                  <SelectItem value="3">Kitchen</SelectItem>
                  <SelectItem value="4">Laundry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={() => console.log('Submit')}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
