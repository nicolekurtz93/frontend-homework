const backgroundColors = [
];

const borderColors = [
];
// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const houseNames = new Map([]);

function setChartColors(numberOfItems) {
  for (let index = 0; index < numberOfItems; (index += 1)) {
    const val1 = Math.random() * 255;
    const val2 = Math.random() * 255;
    const val3 = Math.random() * 255;
    backgroundColors.push(`rgba(${val1}, ${val2}, ${val3}, 0.8)`);
    borderColors.push(`rgba(${val1}, ${val2}, ${val3}, 1)`);
  }
}

const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');
  setChartColors(houseNames.size);
  const chart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: Array.from(houseNames.keys()),
      datasets: [
        {
          label: 'My First Dataset',
          data: Array.from(houseNames.values()),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    responsive: true,
  });
};

const cleanGotData = (data) => {
  data.forEach((element) => {
    if (element.lastName === 'Targaryan') {
      element.lastName = 'Targaryen';
    }
  });
  return data;
};

const parseThronesData = (thronesData) => {
  const cleanThronesData = cleanGotData(thronesData);
  cleanThronesData.forEach((element) => {
    if (houseNames.has(element.lastName)) {
      houseNames.set(element.lastName, houseNames.get(element.lastName) + 1);
    } else if (element.lastName !== '' && element.lastName !== 'None' && element.lastName !== 'Unknown') {
      houseNames.set(element.lastName, 1);
    } else if (houseNames.has('Unknown')) {
      houseNames.set('Unknown', houseNames.get('Unknown') + 1);
    } else {
      houseNames.set('Unknown', 1);
    }
  });

  renderChart();
};

const asyncGetThrone = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((thronesData) => parseThronesData(thronesData))
    .catch((error) => {
      console.log(`There was an error: ${error}`);
      document.querySelector('canvas').remove();
      const div = document.querySelector('#canvas-div');
      const errorText = document.createElement('p');
      errorText.textContent = 'Failed to load Game of Thrones data. Try Again';
      errorText.className = 'text-danger';
      errorText.style.textAlign = 'center';
      errorText.style.fontWeight = 'bolder';
      div.appendChild(errorText);
      return null;
    });
};

// I found that my chart doesn't load properly at resize
// This is my current solution to resolve
asyncGetThrone();
