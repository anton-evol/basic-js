const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(flag = true) {
		this.flag = flag;
	}

	getAlphabet() {
		const result = [];
		for (let i = 65; i < 91; i++) {
			result.push(String.fromCharCode(i));
		}
		return result;
	}

	getMatrix() {
		const matrix = [];
		let alphabet = this.getAlphabet();
		for (let i = 0; i < alphabet.length; i++) {
			matrix.push(alphabet);
			alphabet = alphabet.slice(1).concat(alphabet.slice(0, 1));
		}
		return matrix;
	}

	encrypt(message, key) {
		if (!message || !key) throw new Error("Incorrect arguments!");
		const keyLong = key.repeat(Math.ceil(message.length / key.length));
		const messageArray = message.toUpperCase().split("");
		const keyArray = keyLong.toUpperCase().split("");
		const result = [];
		const alphabet = this.getAlphabet();
		const matrix = this.getMatrix();
		let keyIndex = 0;

		for (let i = 0; i < messageArray.length; i++) {
			if (!alphabet.includes(messageArray[i])) {
				result.push(messageArray[i]);
			} else {
				result.push(matrix[alphabet.indexOf(messageArray[i])][alphabet.indexOf(keyArray[keyIndex])]);
				keyIndex += 1;
			}
		}
		if (!this.flag) {
			result.reverse();
		}
		return result.join("");
	}

	decrypt(message, key) {
		if (!message || !key) throw new Error("Incorrect arguments!");
		const keyLong = key.repeat(Math.ceil(message.length / key.length));
		const messageArray = message.toUpperCase().split("");
		const keyArray = keyLong.toUpperCase().split("");
		const result = [];
		const alphabet = this.getAlphabet();
		const matrix = this.getMatrix();
		let keyIndex = 0;
		for (let i = 0; i < messageArray.length; i++) {
			if (!alphabet.includes(messageArray[i])) {
				result.push(messageArray[i]);
			} else {
				let j = matrix[alphabet.indexOf(keyArray[keyIndex])].indexOf(messageArray[i]);
				result.push(alphabet[j]);
				keyIndex += 1;
			}
		}
		if (!this.flag) {
			result.reverse();
		}
		return result.join("");
	}
}

module.exports = {
	VigenereCipheringMachine,
};
