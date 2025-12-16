export default function cleanSet(set, startString) {
	if (!startString) {
		return '';
	}
	const result = []
	for (const element of set) {
		if (typeof element === 'string' && element.startsWith(startString)) {
			result.push(element.slice(startString.length));
		}
	}
	return result.join("-");
}
