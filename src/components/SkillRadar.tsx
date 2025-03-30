import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillsData = {
  labels: ['Code', 'Empathy', 'Product', 'Detail', 'Research', 'Deployment'],
  datasets: [
    {
      label: 'Skills',
      data: [60, 85, 75, 68, 82, 32],
      backgroundColor: 'rgba(255, 233, 33, 0.51)',
      borderColor: 'rgba(254, 231, 100, 0.92)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(245, 202, 94)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(245, 202, 94)',
      pointRadius: 5,
    }
  ]
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
        color: 'rgba(117, 164, 251, 0.2)',
        lineWidth: 1
      },
      grid: {
        display: true,
        color: 'rgba(129, 150, 255, 0.2)',
        circular: true,
        lineWidth: 1
      },
      pointLabels: {
        color: 'rgba(113, 151, 226, 0.8)',
        font: {
          size: 12,
          family: "'Quicksand', sans-serif"
        }
      },
      ticks: {
        display: true,
        backdropColor: 'transparent',
        color: 'rgba(127, 162, 245, 0.6)',
        stepSize: 20,
        count: 5,
        font: {
          size: 8
        }
      },
      beginAtZero: true,
      suggestedMin: 0,
      suggestedMax: 100
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  },
  elements: {
    line: {
      tension: 0.2
    }
  },
  responsive: true,
  maintainAspectRatio: false
};

const SkillRadar = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4" style={{ height: '300px' }}>
      <Radar data={skillsData} options={options} />
    </div>
  );
};

export default SkillRadar; 