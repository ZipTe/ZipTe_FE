import React, { useEffect, useState } from 'react';
import { getDongPrice } from '../../api/AptAPI';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './css/PriceDongComponent.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DongComponent({ dong, year }) {
  const [DongPriceData, setDongPriceData] = useState([]);

  useEffect(() => {
    getDongPrice(dong, year).then((response) => {
      const data = response.data || [];
      console.log(data);
      setDongPriceData(data);
    });
  }, [dong, year]);

  const getChartData = () => {
    const labels = DongPriceData.map((apt) => apt['거래 일자']);
    const data = DongPriceData.map((apt) => apt['평당 가격 (만원)']);

    return {
      labels,
      datasets: [
        {
          label: '평당 금액 (만원)',
          data,
          fill: false,
          borderColor: '#4CAF50',
          tension: 0.1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '아파트 거래 평당 금액',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '거래 일자',
        },
      },
      y: {
        title: {
          display: true,
          text: '평당 가격 (만원)',
        },
      },
    },
  };

  return (
    <div className='list-container'>
      <div className='list-info'>
        {Array.isArray(DongPriceData) && DongPriceData.length > 0 ? (
          <div className='chart-container'>
            <Line
              data={getChartData()}
              options={options}
              height={500}
              width={800}
            />
          </div>
        ) : (
          <p>가격 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default DongComponent;
