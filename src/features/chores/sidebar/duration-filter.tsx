import { useStore } from '@/store/store';
import * as Slider from '@radix-ui/react-slider';

export function DurationFilter() {
  const durationRange = useStore((state) => state.durationRange);
  const setDurationRange = useStore((state) => state.setDurationRange);

  const formattedDurationRange = `(${durationRange[0]} - ${durationRange[1]} mins)`;

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <span className="text-lg font-medium">Duration</span>
        <span className="text-xs italic">{formattedDurationRange}</span>
      </div>
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
        <Slider.Thumb
          className="block h-3 w-3 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
          aria-label="lower"
        />
        <Slider.Thumb
          className="block h-3 w-3 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
          aria-label="upper"
        />
      </Slider.Root>
    </div>
  );
}
