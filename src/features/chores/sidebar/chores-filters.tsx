import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';
import { Checkbox } from '@/components/checkbox';
import { Label } from '@/components/label';
import { choresFilters } from '@/features/chores/constants';

export function ChoresFilters() {
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
