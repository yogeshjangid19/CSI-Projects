import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB'],
    datasets: [
      {
        label: 'Skill Level',
        data: [9, 9, 9, 9, 9, 9, 9],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 10 },
    },
  };

  return (
    <div className="skills-chart">
      <h2>Skills Chart</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default Chart;