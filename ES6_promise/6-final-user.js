import signUpUser from "./4-user-promise";
import { uploadPhoto } from "./utils";

export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)
	])
}
