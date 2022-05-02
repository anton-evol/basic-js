const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let enc = "";
	let i = 0;
	let count = 1;

	do {
		if (str.charAt(i) == str.charAt(i + 1)) {
			count++;
		} else {
			if (count == 1) {
			} else {
				enc += count;
			}
			enc += str.charAt(i);
			count = 1;
		}
		i++;
	} while (i <= str.length);

	return enc;
}

module.exports = {
	encodeLine,
};
