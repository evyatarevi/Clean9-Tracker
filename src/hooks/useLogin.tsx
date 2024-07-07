import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { setUserId, setDisplayName } = useUserContext();

  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<void> => {
    setError(null);
    setIsPending(true);

    try {
      //login
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUserId(res.user.uid);
      setDisplayName(res.user.displayName || "");
      navigate("/app");
    } catch (error: any) {
      console.log(error.code);
      let errorMessage = "An error occurred";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/user-disabled":
          errorMessage = "User account is disabled";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        default:
          errorMessage = "Login failed";
          break;
      }
      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};

export default useLogin;
