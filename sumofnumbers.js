function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[arr.length - 1] + sumRecursion(arr.slice(0, -1));
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, (total, num) => total + num, 0);
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
console.log(sumTheSimpleWay([1, 2, 3]));
