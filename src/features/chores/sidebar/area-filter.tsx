import { Checkbox } from '@/components/checkbox';
import { Label } from '@/components/label';
import { useStore } from '@/store/store';
import { areaFilters } from '../constants';

export function AreaFilter() {
  const filters = useStore((state) => state.areaFilters);
  const toggleFilter = useStore((state) => state.toggleAreaFilter);

  return (
    <div>
      <div className="py-4 text-lg font-medium">Area</div>
      <div>
        {areaFilters.map((area, index) => (
          <div key={area.value} className="flex items-center">
            <Checkbox
              id={`filter-${area.value}-${index}`}
              name={`${area.value}[]`}
              value={area.value}
              checked={filters.includes(area.value)}
              onCheckedChange={() => toggleFilter(area.value)}
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <Label
              htmlFor={`filter-${area.value}-${index}`}
              className="text-md ml-3 cursor-pointer text-gray-600"
            >
              {area.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
