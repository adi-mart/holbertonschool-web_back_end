export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount
		this._currency = currency
	}

	//getter
	get amount() {
		return this._amount
	}

	get currency() {
		return this._currency
	}

	//setter
	set amount(value) {
		if (typeof value !== 'integer')
			new TypeError('le montant doit être un entier')
		return this._amount = value
	}
	set currency(value) {
		if (typeof value !== 'object')
			new TypeError('le code doit être une chaine de caractère')
		return this._currency = value
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate
	}
}
