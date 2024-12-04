/* 1 */

const array1 = [3, -5, -2, 4, -8, 0];

const SumOfEven = (arr) =>
	arr.filter(num => num < 0 && num % 2 === 0).reduce((sum, num) => sum + num, 0);

console.log(SumOfEven(array1));

/* 2 */
const array2 = [-5, 10, -20, -130];

const maxAbsolute = (arr) =>
	arr.reduce((max, num) => Math.abs(num) > Math.abs(max) ? num : max, arr[0]);

console.log(maxAbsolute(array2));

/* 3 */
const array3 = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3];

const countPosNeg = (arr) => {
	const positiveCount = arr.filter(num => num > 0).length;
	const negativeCount = arr.filter(num => num < 0).length;
	return { Положительные: positiveCount, Отрицательные: negativeCount };
};

console.log(countPosNeg(array3));

/* 4 */
const array4 = [1, 2, 3, 4, 2];

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;
console.log(hasDuplicates(array4));

/* 5 */
const array5 = [1, 2, 3, 4, 2, 1, 5 , 8, 9 ,2];

const countUnique = (arr) => new Set(arr).size;
console.log(countUnique(array5));

/* 6 */

const array6a = [1, 2, 3];
const array6b = [1, 2, 3];
const array6c = [3, 2, 1];

const areArraysEqual = (arr1, arr2) => 
arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

console.log(areArraysEqual(array6a, array6b));
console.log(areArraysEqual(array6a, array6c));