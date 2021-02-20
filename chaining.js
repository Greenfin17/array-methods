const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


const chaining = (arr) => {
  //${arr.sort((a,b) => a - b).filter((n) => (n <= 19)).forEach((n) => (n * 1.5 ) -1 )};
  const arrSum = arr.sort((a,b) => a - b ).filter((n) => !(n > 19)).map((n) => n = (n * 1.5 - 1)).reduce((sum, currVal) =>  sum += currVal, 0);
  /*
  console.log(arr1);
  const arr2 = arr1.filter((n) => !(n > 19)); 
  console.log(arr2);
  const arr3 = arr2.map((n) => n = (n * 1.5 - 1));
  console.log(arr3);
  const sum = arr3.reduce((sum, currVal) =>  sum += currVal, 0);
  console.log(sum); */
  console.log(arrSum);
document.getElementById('chaining-test').innerHTML = arrSum.toString();
}

chaining(integers);
