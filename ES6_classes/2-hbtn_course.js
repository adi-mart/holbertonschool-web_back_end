export default class HolbertonSchool {
	constructor(name, length, students) {
		this._name = name
		this._length = length
		this._students = students
	}
	//getter
	get name() {
		return this._name
	}
	get length() {
		return this._length
	}
	get students() {
		return this._students
	}
	
	//setter
	set length(value) {
		if (typeof value !== 'integer')
			new TypeError('la longueur doit être un nombre')
		return this._length = value
	}

	set name(value) {
		if (typeof value !== 'string')
			new TypeError('le nom doit être une chaine de caractère')
		return this._name = value
	}

		set students(value) {
		if (typeof value !== 'array')
			new TypeError('létudiant doit être un tableau de string')
		return this._students = value
	}
}