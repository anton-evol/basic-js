const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!arguments.length) {
		return "Unable to determine the time of year!";
	}
	if (!Date.prototype.isPrototypeOf(date)) {
		throw new Error("Invalid date!");
	}
	for (item in date) {
		throw new Error("Invalid date!");
	}
	switch ((((date.getMonth() + 1) / 3) | 0) % 4) {
		case 0:
			return "winter";
		case 1:
			return "spring";
		case 2:
			return "summer";
		case 3:
			return "autumn";
	}
}

module.exports = {
	getSeason,
};
