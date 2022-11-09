import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function TopConsoCard() {

  const chartData = {
    labels: ['Lumières', 'Appareils Ménagers', 'Chauffage', 'Autres'],
    datasets: [
      {
        label: 'Top consommation',
        data: [
          65, 10, 20, 5,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
          tailwindConfig().theme.colors.violet[600],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
          tailwindConfig().theme.colors.violet[700],

        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Consommation</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260}/>
    </div>
  );
}

export default TopConsoCard;
