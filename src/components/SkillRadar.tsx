// import React from 'react';
import { useEffect, useState } from 'react';
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
  labels: ['Gamification', 'Empathy', 'Backend', 'Detail', 'Research', 'Frontend'],
  datasets: [
    {
      label: 'Skills',
      data: [90, 85, 47, 78, 82, 82],
      backgroundColor: 'rgba(18, 140, 59, 0.51)',
      borderColor: 'rgba(59, 199, 82, 0.92)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(29, 179, 61)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(14, 159, 65)',
      pointRadius: 5,
    }
  ]
};

const SkillRadar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // 初始检查是否为深色模式
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // 监听深色模式变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: isDarkMode ? 'rgba(117, 164, 251, 0.2)' : 'rgba(117, 164, 251, 0.2)',
          lineWidth: 1
        },
        grid: {
          display: true,
          color: isDarkMode ? 'rgba(129, 150, 255, 0.2)' : 'rgba(129, 150, 255, 0.2)',
          circular: true,
          lineWidth: 1
        },
        pointLabels: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
          font: {
            size: 12,
            family: "'Quicksand', sans-serif"
          }
        },
        ticks: {
          display: true,
          backdropColor: 'transparent',
          color: isDarkMode ? 'rgba(200, 200, 220, 0.8)' : 'rgba(3, 21, 64, 0.6)',
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

  return (
    <div className="p-2" style={{ height: '220px' }}>
      <Radar data={skillsData} options={options} />
    </div>
  );
};

export default SkillRadar; 