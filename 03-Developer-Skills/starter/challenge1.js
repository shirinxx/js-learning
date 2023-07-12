'use strict';

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(str);
};

printForecast(arr1);
printForecast(arr2);
