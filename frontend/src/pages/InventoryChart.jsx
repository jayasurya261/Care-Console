import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
import Button1 from '../components/Button1';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

// Register necessary components
Chart.register(...registerables);

function InventoryChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/tablets/tablets')
      .then(response => {
        const data = response.data;
        const labels = data.map(item => item.name);
        const quantities = data.map(item => item.quantity);
        
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Tablet Stock Levels',
              data: quantities,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      })
      .catch(error => {
        console.error('Error fetching tablet data:', error);
      });
  }, []);

  if (!chartData) {
    return <div className='flex justify-center'>
      <Loading/>
  </div>;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow custom dimensions
  };

  return (
    <div>
    <div style={{ width: '80%', height: '400px' }} className='mb-20'> {/* Set desired width and height */}
      <div className='flex justify-between'>
      <h2 className=''>Tablet Inventory</h2>
      <Link to={'/tablets'}>
      <Button1 contain="Tablets"/>
      </Link>
      </div>
      <Bar data={chartData} options={options} />
    </div>
    </div>
  );
}

export default InventoryChart;
