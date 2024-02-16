import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';
import { Checkbox } from '@/components/checkbox';
import { Label } from '@/components/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { choresFilters } from '@/features/chores/constants';
import * as Slider from '@radix-ui/react-slider';

export function ChoresFilters() {
  // TODO: Link these to the chores state once it's setup using Zustand
  return (
    <>
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

      <DurationSlider />
    </>
  );
}

function DurationSlider() {
  return (
    <Slider.Root
      className="relative flex w-full touch-none select-none items-center"
      defaultValue={[0, 60]}
      max={60}
      step={5}
      minStepsBetweenThumbs={1}
    >
      <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <Slider.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
      </Slider.Track>

      <SliderThumbWithTooltip />

      <Slider.Thumb
        className="block h-3 w-3 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
        aria-label="Volume"
      />
    </Slider.Root>
  );
}

function SliderThumbWithTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Slider.Thumb
          className="block h-3 w-3 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
          aria-label="lower"
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>RANGE</p>
      </TooltipContent>
    </Tooltip>
  );
}
