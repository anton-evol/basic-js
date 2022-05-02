const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let output = matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
	let summ = 0;
	output.forEach((arr) => {
		arr.forEach((el, index) => {
			if (index < arr.indexOf(0) || arr.indexOf(0) == -1) {
				summ += el;
			}
		});
	});
	return summ;
}

module.exports = {
	getMatrixElementsSum,
};
