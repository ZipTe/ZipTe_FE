import React, { useEffect, useState } from 'react';
import { getAptPriceWithSIze } from '../../api/AptAPI';
import './css/PriceComponent.css';
import { Line } from 'react-chartjs-2'; // 차트 컴포넌트 임포트
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

// Chart.js 기본 설정
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PriceComponent({ apt_name, size, year }) {
  const [apartmentData, setApartmentData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '거래 금액 (만원)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    getAptPriceWithSIze(apt_name, size, year)
      .then((response) => {
        // 데이터 가져오기
        const data = response.data || [];

        // 거래 일자 기준으로 내림차순 정렬
        const sortedData = data.sort(
          (a, b) => new Date(b['거래 일자']) - new Date(a['거래 일자'])
        );
        setApartmentData(sortedData);

        // 차트 데이터 준비
        const labels = sortedData.map((apt) => apt['거래 일자']);
        const prices = sortedData.map((apt) => apt['거래 금액 (만원)']);

        setChartData({
          labels: labels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: prices,
            },
          ],
        });
      })
      .catch((err) => {
        console.error('Error fetching apartment data:', err);
      });
  }, [apt_name, size, year]);

  return (
    <div className='list-container'>
      {/* 거래 금액 그래프 */}
      <div className='chart-container'>
        <Line data={chartData} options={{ responsive: true }} />
      </div>
      <div className='list-info'>
        {Array.isArray(apartmentData) && apartmentData.length > 0 ? (
          apartmentData.map((apt, index) => (
            <div key={index} className='apt-item'>
              <div className='apt-name'>
                <strong> 거래 일자: </strong> {apt['단지명']}
              </div>
              <div className='apt-type'>
                <strong>거래 금액:</strong> {apt['거래 금액 (만원)']} (만원)
              </div>
              <div className='apt-time'>
                <strong> 거래 일자: </strong> {apt['거래 일자']}
              </div>
              <div className='apt-type'>
                <strong>전용 면적 (㎡):</strong> {apt['전용 면적 (㎡)']}
              </div>
              <div className='apt-floor'>
                <strong>층:</strong> {apt['층']}
              </div>
            </div>
          ))
        ) : (
          <p>거래 내역이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default PriceComponent;
