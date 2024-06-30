import { useState } from "react";
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<void> => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(res.user);

      if (!res) {
        // such us the network connection is bad
        throw new Error("Could not complete signup");
      }

      // add display name to user in firebase
      await updateProfile(res.user, { displayName });

      setError(null);
    } catch (error: any) {
      // check how change the any type ------------
      console.error("Firebase Error: ", error.code); // Log Firebase error code

      // Customize error message based on Firebase error code
      let errorMessage = "An error occurred";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found";
          break;
        case "auth/wrong-password":
          errorMessage = "Invalid password";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        default:
          errorMessage = "Authentication failed";
          break;
      }

      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};

export default useSignup;
