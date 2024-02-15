export const choresFilters = [
    {
      id: 'area',
      name: 'Area',
      options: [
        { value: 'bathroom', label: 'Bathroom', checked: false },
        { value: 'bedroom', label: 'Bedroom', checked: false },
        { value: 'kitchen', label: 'Kitchen', checked: false },
        { value: 'laundry', label: 'Laundry', checked: false },
      ],
    },
    {
      id: 'duration',
      name: 'Duration',
      options: [
        { value: 'less-than-five', label: '< 5 minutes', checked: false },
        { value: 'five-to-fifteen', label: '5 - 15 minutes', checked: false },
        { value: 'thirty-to-sixty', label: '30-60 minutes', checked: false },
        { value: 'more-than-hour', label: '> 1 hour', checked: false },
      ],
    },
  ];