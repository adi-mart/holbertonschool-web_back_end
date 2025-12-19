import { createUser, uploadPhoto } from './utils'

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
		.then((value) => {
			const [photo, user] = value;
			console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
		})
		.catch(() => {
			console.log('Signup system offline');
		})
}
