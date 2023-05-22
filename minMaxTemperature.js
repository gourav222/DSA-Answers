//The time complexity of these solution is O(number of documents in weather report).

//The space complxity of these solution is O(number of documents in weather report).
let weatherData = [
  {
    id: 4840240013377536,
    applicable_date: "2022-03-28",
    min_temp: 3.74,
    max_temp: 16.240000000000003,
    city: "Bangalore",
  },
  {
    id: 6158451006767104,
    applicable_date: "2022-03-29",
    min_temp: 2.6300000000000005,
    max_temp: 17.42,
    city: "Bangalore",
  },
  {
    id: 5139251006013440,
    applicable_date: "2022-03-30",
    min_temp: 3.83,
    max_temp: 16.88,
    city: "Bangalore",
  },
  {
    id: 5037364718075904,
    applicable_date: "2022-03-31",
    min_temp: 5.485,
    max_temp: 11.955,
    city: "Bangalore",
  },
  {
    id: 4961017379422208,
    applicable_date: "2022-04-01",
    min_temp: 1.22,
    max_temp: 12.325,
    city: "Bangalore",
  },
  {
    id: 5559481041682432,
    applicable_date: "2022-04-02",
    min_temp: 2.035,
    max_temp: 12.565,
    city: "Bangalore",
  },
  {
    id: 5838918358401024,
    applicable_date: "2022-03-28",
    min_temp: 0.195,
    max_temp: 5.97,
    city: "Delhi",
  },
  {
    id: 6158451006767104,
    applicable_date: "2022-03-29",
    min_temp: 1.6300000000000005,
    max_temp: 18.42,
    city: "Delhi",
  },
];

function findMinMaxTemperatures(weatherData) {
  let result = [];

  for (let i = 0; i < weatherData.length; i++) {
    let currentData = weatherData[i];
    let currentDate = currentData.applicable_date;
    let currentMinTemp = currentData.min_temp;
    let currentMaxTemp = currentData.max_temp;
    let currentCity = currentData.city;

    let existingDateIndex = result.findIndex(function (item) {
      return item.applicable_date === currentDate;
    });

    if (existingDateIndex === -1) {
      let entry = {
        applicable_date: currentDate,
        min_temp: currentMinTemp,
        min_temp_city: currentCity,
        max_temp: currentMaxTemp,
        max_temp_city: currentCity,
      };
      result.push(entry);
    } else {
      let existingEntry = result[existingDateIndex];
      if (currentMinTemp < existingEntry.min_temp) {
        existingEntry.min_temp = currentMinTemp;
        existingEntry.min_temp_city = currentCity;
      }
      if (currentMaxTemp > existingEntry.max_temp) {
        existingEntry.max_temp = currentMaxTemp;
        existingEntry.max_temp_city = currentCity;
      }
    }
  }

  return result;
}

let output = findMinMaxTemperatures(weather_data);

console.log(output);
