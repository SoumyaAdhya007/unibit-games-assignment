/**
 * The function `findPairsAndCombinations` takes an array and a target value as input, finds pairs in
 * the array that sum up to the target value, and then finds combinations of those pairs that sum up to
 * double the target value.
 * @param arr - The `arr` parameter is an array of numbers: `[1, 3, 2, 2, -4, -6, -2, 8]`.
 * @param target - The target value is 4.
 * @returns The function `findPairsAndCombinations` returns the result of calling the
 * `findCombinations` function with the `pairsArr` and `target` as arguments.
 */
function findPairsAndCombinations(arr, target) {
  let pairsArr = [];

  // Step 1: Finding pairs that sum up to the target value
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairsArr.push([arr[i], arr[j]]);
      }
    }
  }

  return findCombinations(pairsArr, target);
}

function findCombinations(pairsArr, target) {
  // Step 2: Merge the array into a single array in ascending order
  let mergedArr = pairsArr.flat().sort((a, b) => a - b);

  let doubleTarget = target * 2;
  let allCombinationsArr = [];

  // Step 3: Double the target value and find combinations equal to the double target
  for (let i = 0; i < mergedArr.length; i++) {
    let sum = mergedArr[i];
    let combinationArr = [mergedArr[i]];

    for (let j = i + 1; j < mergedArr.length; j++) {
      sum += mergedArr[j];
      combinationArr.push(mergedArr[j]);

      if (sum === doubleTarget) {
        allCombinationsArr.push(combinationArr);
      }
    }
  }

  return console.log(allCombinationsArr);
}

const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
findPairsAndCombinations(arr, target);
