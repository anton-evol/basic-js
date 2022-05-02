const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str);

	for (let prop in options) {
		options[prop] = String(options[prop]);
	}

	let repeatTimes;
	if (options["repeatTimes"]) {
		repeatTimes = options["repeatTimes"];
	} else repeatTimes = 1;
	let separator;
	if (options["separator"]) {
		separator = options["separator"];
	} else {
		separator = "+";
	}
	let addition;
	if (options["addition"]) {
		addition = options["addition"];
	} else {
		addition = "";
	}
	let additionRepeatTimes;
	if (options["additionRepeatTimes"]) {
		additionRepeatTimes = options["additionRepeatTimes"];
	} else {
		additionRepeatTimes = 1;
	}
	let additionSeparator;
	if (options["additionSeparator"]) {
		additionSeparator = options["additionSeparator"];
	} else {
		additionSeparator = "|";
	}

	let output = "";
	let addStr = output.concat(addition, additionSeparator).repeat(additionRepeatTimes);
	addStr = addStr.substring(0, addStr.length - additionSeparator.length);
	addStr = addStr.concat(separator);
	output = str.concat(addStr).repeat(repeatTimes);
	output = output.substring(0, output.length - separator.length);

	return output;
}

module.exports = {
	repeater,
};
