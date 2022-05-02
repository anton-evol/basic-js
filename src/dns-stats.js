const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let dnsObj = {};

	domains.forEach((el) => {
		let subArr = el.split(".").reverse();
		subArr.forEach((el, index) => {
			subArr.splice(index, 1, "." + el);
		});
		for (let i = 1; i <= subArr.length; i++) {
			let objProp = subArr.slice(0, i).join("");
			if (dnsObj[objProp]) {
				dnsObj[objProp] = dnsObj[objProp] + 1;
			} else dnsObj[objProp] = 1;
		}
	});

	return dnsObj;
}

module.exports = {
	getDNSStats,
};
