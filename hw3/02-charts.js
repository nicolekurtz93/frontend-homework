const backgroundColors = [
];

const borderColors = [
];
// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
// const houseNames = new Map([
//   ['Targaryen', 0], ['Tyrell', 0], ['Arryn', 0], ['GreyJoy', 0], ['Tully', 0], ['Stark', 0],
//   ['Baratheon', 0], ['Frey', 0]]);
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
  });
};

const asyncGetThrone = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

const doesElementMatchAnotherHouse = (element) => {
  houseNameKeys = Array.from(houseNames.keys());
  houseNameKeys.forEach((house) => {

  });
};

const parseThronesData = (thronesData) => {
  thronesData.forEach((element) => {
    if (houseNames.has(element.lastName)) {
      houseNames.set(element.lastName, houseNames.get(element.lastName) + 1);
    } else if (element.lastName !== '' && element.lastName !== 'None' && element.lastName !== 'Unknown') {
      houseNames.set(element.lastName, 1);
    }
  });
  const arrayOfMap = Array.from(houseNames);
  console.log(arrayOfMap);
  arrayOfMap.forEach((element) => {
    if (element[1] == 1) {
      doesElementMatchAnotherHouse(element);
    }
  });

  renderChart();
};

renderChart();
asyncGetThrone()
  .then((thronesData) => parseThronesData(thronesData));
