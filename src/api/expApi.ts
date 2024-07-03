import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
// Create an initial document to update.
export const getDocument = async () => {
  const docRef = doc(db, "example", "0heNxwnmfkGehA4GaSDa");
  await update(docRef);
  const docSnap = (await getDoc(docRef)).data();
  console.log(docSnap);
};
// await setDoc(frankDocRef, {
//   name: "Frank",
//   favorites: { food: "Pizza", color: "Blue", subject: "recess" },
//   age: 12,
// });

// To update age and favorite color:
const update = async (docRef: any) => {
  await updateDoc(docRef, {
    "obj.1": "two",
    // age: 13,
    // "favorites.color": "Red",
  });
};
