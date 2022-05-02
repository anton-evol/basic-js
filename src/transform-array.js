const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
	}
	let workarr = [...arr];
	workarr.forEach((el, index) => {
		switch (el) {
			case "--discard-prev":
				if (index > 0) {
					workarr[index - 1] = "undefined";
				}
				delete workarr[index];
				break;
			case "--discard-next":
				workarr[index + 1] = "undefined";
				delete workarr[index];
				break;
			case "--double-prev":
				if (index > 0) {
					workarr[index] = workarr[index - 1];
				} else {
					workarr[index] = "undefined";
				}
				break;
			case "--double-next":
				if (index < workarr.length - 1) {
					workarr.splice(index, 1, workarr[index + 1]);
				} else {
					delete workarr[index];
				}
				break;
		}
	});
	let newarr = workarr.filter(function (el) {
		return el !== "undefined";
	});
	return newarr;
}

module.exports = {
	transform,
};
