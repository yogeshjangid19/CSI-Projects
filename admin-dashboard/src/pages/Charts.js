import React from 'react';
import Chart from '../components/Chart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { title: { display: true, text: 'Month' } },
    y: { title: { display: true, text: 'Value' } },
  },
};

const Charts = () => {
  return <Chart data={data} options={options} />;
};

export default Charts;
