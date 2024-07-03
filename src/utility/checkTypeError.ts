import { FirebaseError } from "firebase/app";

export const checkTypeError = (error: unknown) => {
  if (error instanceof FirebaseError) {
    // console.error("Firebase error code:", error.code);
    return `Firebase error message: ${error.message}`;
  } else if (error instanceof Error) {
    // console.error("Error name:", error.name);
    return `Error message: ${error.message}`;
  } else {
    return `Unexpected error: ${error}`;
  }
};
