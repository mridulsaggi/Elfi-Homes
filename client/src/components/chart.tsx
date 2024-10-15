import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 20, label: 'Intital' },
  { id: 1, value: 35, label: 'Future' },
  { id: 2, value: 25, label: 'Complete' },
  { id: 3, value: 20, label: 'Contact' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}