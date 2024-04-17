import dynamic from 'next/dynamic';

const DonutChart = dynamic(() => import('./DonutChart'), {
  ssr: false
});

interface DonutChartData {
  header: string
  labels: string[];
  values: number[];
  colors: string[];
  id: string;
}

interface DonutChartGridProps {
  header: string,
  description: string,
  chartOne: DonutChartData,
  chartTwo: DonutChartData
}

export default function DonutChartGrid({ header, description, chartOne, chartTwo }: DonutChartGridProps) {
  
  return (
    <div className="w-full p-6 bg-orange-100 border border-black rounded-lg">
      <h2 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">{header}</h2>
      <p className="mb-3 font-normal text-gray-500 text-center">{description}</p>
        <div className='flex justify-center gap-4'>
          <DonutChart
            header={chartOne.header}
            labels={chartOne.labels}
            values={chartOne.values}
            colors={chartOne.colors}
            id={chartOne.id}
          />
          <DonutChart
            header={chartTwo.header}
            labels={chartTwo.labels}
            values={chartTwo.values}
            colors={chartTwo.colors}
            id={chartTwo.id}
          />
        </div>
    </div>
  );
}