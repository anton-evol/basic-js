const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let digitArr = n.toString().split("");
	let currentMax = 0;

	for (let i = 0; i < digitArr.length; i++) {
		let tempArr = [...digitArr];
		tempArr.splice(i, 1);
		let iterationMax = tempArr.join("");
		console.log(iterationMax);
		if (iterationMax > currentMax) {
			currentMax = +iterationMax;
		}
	}

	return currentMax;
}

module.exports = {
	deleteDigit,
};
