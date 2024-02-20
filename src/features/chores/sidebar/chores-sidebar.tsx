import { Button } from '@/components/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer';
import { IconFilter } from '@tabler/icons-react';
import { AreaFilter } from './area-filter';
import { CreateChore } from './create-chore';
import { DurationFilter } from './duration-filter';

export function ChoresSidebar() {
  return (
    <div className="sticky top-[160px] flex gap-x-2 gap-y-4 lg:flex-col">
      <CreateChore />
      <DesktopFilters />
      <MobileFilters />
    </div>
  );
}

function DesktopFilters() {
  return (
    <div className="hidden flex-col gap-y-6 lg:flex">
      <AreaFilter />
      <DurationFilter />
    </div>
  );
}

function MobileFilters() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline" className="p-3 lg:hidden">
          <IconFilter className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select Filters</DrawerTitle>
          <DrawerDescription>Choose by chore area & duration</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-y-6 p-6">
          <AreaFilter />
          <DurationFilter />
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
