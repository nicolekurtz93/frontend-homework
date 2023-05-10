
import React, { useEffect } from 'react'
import NavBar from '../Nav'
import Chart from 'chart.js/auto'
import '../../index.css'
import {fetchData} from '../Utils'
const Houses = () => {

  const houseNames = new Map([]);

  useEffect(() => {
    fetchData().then((data) => createChartData(data))
  })

  const createChartData = (rawData) => {
    rawData.forEach((element) => {
      if (houseNames.has(element.lastName)) {
        houseNames.set(element.lastName, houseNames.get(element.lastName) + 1);
      } else if (element.lastName !== '' && element.lastName !== 'None' && element.lastName !== 'Unknown') {
        houseNames.set(element.lastName, 1);
      }
    });

    let chart = Chart.getChart('myChart');
    if (chart !== undefined) {
      chart.data.labels = Array.from(houseNames.keys());
      chart.data.datasets.data = Array.from(houseNames.values());
      chart.update();
    }
    else {
      new Chart('myChart', {
        type: 'doughnut',
        data: {
          labels: Array.from(houseNames.keys()),
          datasets: [{
            data: Array.from(houseNames.values())
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Number of Characters in House'
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }

      )
    }
  }


  return (
    <>
      <NavBar />
      <div className='h-100 w-100 justify-content-center' id='breakdown'>
        <h1 className='w-100 container-fluid text-center p-4'>Game Of Thrones House Breakdown</h1>
        <div className='d-flex w-100 justify-content-center' id='result'>
        <img
          id="loading"
          className="mb-5"
          src={require('../../loader.gif')}
          alt="gif of a loading element"
          width="400px"
        />
        </div>
        <canvas id='myChart' className='container-fluid' /> </div>
    </>
  );
}

export default Houses;