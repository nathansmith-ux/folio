"use client"

import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface DonutChartProps {
  header: string
  labels: string[]
  values: number[]
  colors: string[]
  id: string
}

export default function DonutChart({ header, labels, values, colors, id } : DonutChartProps) {

  const chartRef = useRef(null)

  const getChartOptions = () => {
    return {
      series: values,
      colors,
      labels,
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };

  useEffect(() => {

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, getChartOptions());
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [header, values, labels, colors, id]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{header}</h3>
      </div>
      <div ref={chartRef} id={`chart-${id}`}></div>
    </div>
  );
};
