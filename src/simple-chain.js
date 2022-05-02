const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: new Array(),
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		if (!arguments.length) this.chain.push("( )");
		else this.chain.push("( " + value + " )");
		return this;
	},
	removeLink(position) {
		if (typeof position !== "number" || position !== (position | 0) || this.chain[position - 1] === undefined) {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let chain = this.chain.join("~~");
		this.chain = [];
		return chain;
	},
};

module.exports = {
	chainMaker,
};
