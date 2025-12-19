import signUpUser from "./4-user-promise";
import { uploadPhoto } from "./utils";

export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)
	])
  .then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return { status: result.status, value: result.value };
    }
    return { status: result.status, value: result.reason };
  }));
}
