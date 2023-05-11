
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../index.css'
import { ArcElement, Chart, Legend } from 'chart.js'
import { setChartColors } from './Utils';
Chart.register(ArcElement, Legend);

const Houses = (props) => {
  const { throneData } = props;
  const houseNames = new Map([]);

  throneData.forEach((element) => {
    if (houseNames.has(element.lastName)) {
      houseNames.set(element.lastName, houseNames.get(element.lastName) + 1);
    } else if (element.lastName !== '' && element.lastName !== 'None' && element.lastName !== 'Unknown') {
      houseNames.set(element.lastName, 1);
    }
  });

  const backgroundColors = setChartColors(houseNames.size);
  const labels = Array.from(houseNames.keys());
  const counts = Array.from(houseNames.values());

  const chartData = {
    labels: labels,
    datasets: [{
      data: counts,
      backgroundColor: backgroundColors
    },
    ],
  };


  return (
    <>
      <div className=' w-100 justify-content-center' id='breakdown'>
        <h1 className=' container-fluid text-center p-4'>Game Of Thrones House Breakdown</h1>
        <div className='container-fluid justify-content-center align-items-center w-50' id='result'>
            <img
              id="loading"
              className="mb-5"
              src={require('../loader.gif')}
              alt="gif of a loading element"
              width="400px"
            />
            <Doughnut data={chartData}/>
        </div>
      </div>
    </>
  );
}

export default Houses;