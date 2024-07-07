import { db } from "../config/firebaseConfig";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import RecipesData from "../data/recipesData";
// import { type recipeData } from "../types";

export const updateRecipesData = async () => {
  try {
    const docRef = doc(db, "recipes", "ECysR5pFhft4t37bw950");
    await updateDoc(docRef, {
      recipes: RecipesData,
    });
    return "update successful";
  } catch (error) {
    throw new Error("Failed to update recipes");
  }
};

export const getRecipesData = async () => {
  try {
    const docRef = doc(db, "recipes", "ECysR5pFhft4t37bw950");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().recipes;
    }
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};
