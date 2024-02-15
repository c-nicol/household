import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
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
import { choresFilters } from '@/features/chores/constants';
import { IconPlus } from '@tabler/icons-react';

export function ChoresSidebar() {
  return (
    <div className="flex flex-col gap-y-4">
      <CreateChore />
      <ChoresFilters />
    </div>
  );
}

function CreateChore() {
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
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ChoresFilters() {
  // TODO: Link these to the chores state once it's setup using Zustand
  return (
    <Accordion type="multiple" defaultValue={['area', 'duration']} className="w-full">
      {choresFilters.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger>{section.name}</AccordionTrigger>
          <AccordionContent className="pl-2">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <Checkbox
                  id={`filter-${section.id}-${optionIdx}`}
                  name={`${section.id}[]`}
                  defaultValue={option.value}
                  defaultChecked={option.checked}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <Label
                  htmlFor={`filter-${section.id}-${optionIdx}`}
                  className="ml-3 cursor-pointer text-sm text-gray-600"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
