const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let s1arr = s1.split("");
	let s2arr = s2.split("");

	let charCount = 0;
	let index = 0;
	s1arr.forEach((el) => {
		if (s2arr.indexOf(el, index) !== -1) {
			s2arr.splice(s2arr.indexOf(el), 1, "" - "");
			index++;
			charCount++;
		}
	});

	return charCount;
}

module.exports = {
	getCommonCharacterCount,
};
