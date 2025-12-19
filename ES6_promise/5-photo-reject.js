export default function uploadPhoto(filename) {
	return new Promise((resolve, reject) => {
		if (reject) {
			reject(Error(`${filename} cannot be processed`))
		}
	})
}
