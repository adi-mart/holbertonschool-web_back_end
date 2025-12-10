export default class Currency {
	constructor(code, name) {
		this._name = name
		this._code = code
	}

	//getter
	get name() {
		return this._name
	}
	get code() {
		return this._code
	}

	//setter
	set name(value) {
		if (typeof value !== 'string')
			new TypeError('le nom doit être une chaine de caractère')
		return this._name = value
	}

	set code(value) {
		if (typeofvalue !== 'string')
			new TypeError('le code doit être une chaine de caractère')
		return this._code = value
	}

	displayFullCurrency() {
		return `${this._name} (${this._code})`
	}
}
