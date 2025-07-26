//your JS code here. If required.
function secondHighest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}
console.log(secondHighest()); 