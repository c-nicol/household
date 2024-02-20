import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form';
import { Input } from '@/components/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { useStore } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().max(50),
  area: z.string(),
  duration: z.custom<number>().transform((val) => Number(val)),
});

export function CreateChore() {
  const addChore = useStore.getState().addChore;

  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      area: '',
      duration: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addChore({
      id: uuidv4(),
      createdAt: new Date(),
      ...values,
    });
    setDesktopOpen(false);
    setMobileOpen(false);
    form.reset();
    toast.success('Chore has been created.');
  };

  return (
    <>
      <Drawer
        open={mobileOpen}
        onOpenChange={(val) => {
          setMobileOpen(val);
          form.reset();
        }}
      >
        <DrawerTrigger asChild className="lg:hidden">
          <Button className="flex w-full gap-x-2">
            <IconPlus className="h-4 w-4" />
            <span>Create Chore</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create a Chore</DrawerTitle>
            <DrawerDescription>Click submit when you're done.</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form className="grid gap-6 px-6 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl>
                      <Input id="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="area">Area</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="bedroom">Bedroom</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="laundry">Laundry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="duration">Duration</FormLabel>
                    <FormControl>
                      <Input id="duration" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter className="px-0">
                <Button type="submit">Submit</Button>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>

      <Dialog
        open={desktopOpen}
        onOpenChange={(val) => {
          setDesktopOpen(val);
          form.reset();
        }}
      >
        <DialogTrigger asChild>
          <Button className="hidden w-full gap-x-2 lg:flex">
            <IconPlus className="h-4 w-4" />
            <span>Create Chore</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create a Chore</DialogTitle>
            <DialogDescription>Click submit when you're done.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form className="grid gap-6 pt-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl>
                      <Input id="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="area">Area</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="bedroom">Bedroom</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="laundry">Laundry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="duration">Duration</FormLabel>
                    <FormControl>
                      <Input id="duration" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
