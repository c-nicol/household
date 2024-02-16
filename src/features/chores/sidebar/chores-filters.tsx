import { Checkbox } from '@/components/checkbox';
import { Label } from '@/components/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { useStore } from '@/store/store';
import * as Slider from '@radix-ui/react-slider';
import { areaFilters } from '../constants';

export function ChoresFilters() {
  return (
    <div className="flex flex-col gap-y-6">
      <AreaFilter />
      <DurationSlider />
    </div>
  );
}

function AreaFilter() {
  const filters = useStore((state) => state.areaFilters);
  const toggleFilter = useStore((state) => state.toggleAreaFilter);

  console.log('Filters:', filters);

  return (
    <div>
      <div className="py-4 font-medium">Area</div>
      <div>
        {areaFilters.map((area, index) => (
          <div key={area.value} className="flex items-center">
            <Checkbox
              id={`filter-${area.value}-${index}`}
              name={`${area.value}[]`}
              value={area.value}
              checked={filters.includes(area.value)}
              onCheckedChange={() => toggleFilter(area.value)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <Label
              htmlFor={`filter-${area.value}-${index}`}
              className="ml-3 cursor-pointer text-sm text-gray-600"
            >
              {area.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

function DurationSlider() {
  const durationRange = useStore((state) => state.durationRange);
  const setDurationRange = useStore((state) => state.setDurationRange);

  return (
    <div>
      <div className="py-4 font-medium">Duration</div>
      <Slider.Root
        className="relative flex w-full touch-none select-none items-center"
        value={durationRange}
        onValueChange={(value) => setDurationRange(value)}
        max={60}
        step={5}
        minStepsBetweenThumbs={1}
      >
        <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <Slider.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
        </Slider.Track>
        <SliderThumbWithTooltip />
        <SliderThumbWithTooltip />
      </Slider.Root>
    </div>
  );
}

function SliderThumbWithTooltip() {
  const durationRange = useStore((state) => state.durationRange);
  const formattedDurationRange = `${durationRange[0]} - ${durationRange[1]} mins`;

  return (
    <Tooltip delayDuration={50}>
      <TooltipTrigger asChild>
        <Slider.Thumb
          className="block h-3 w-3 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
          aria-label="lower"
        />
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{formattedDurationRange}</p>
      </TooltipContent>
    </Tooltip>
  );
}
