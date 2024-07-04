import { db } from "../config/firebaseConfig";
import {
  doc,
  updateDoc,
  getDoc,
  Timestamp,
  setDoc,
  // collection,
  // addDoc,
  // getDocs,
} from "firebase/firestore";
import { TaskArray } from "../types";
import tasks from "../data/usersData";

const getUserData = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};

const updateTasksDay = async (
  userId: string,
  day: string,
  tasks: TaskArray
) => {
  try {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, {
      [`tasks.${day}`]: tasks,
    });
    return "update successful";
  } catch (error) {
    throw new Error("Failed to update tasks");
  }
};

// const createStartDate = async (userId: string) => {
//   try {
//     const docRef = doc(db, "users", userId);
//     const newDate = Timestamp.fromDate(new Date());
//     await updateDoc(docRef, {
//       startDate: newDate,
//     });
//     return newDate;
//   } catch (error) {
//     throw new Error("Failed to create start date");
//   }
// };

const createUserDoc = async (userId: string) => {
  try {
    const newDate = Timestamp.fromDate(new Date());
    await setDoc(doc(db, "users", userId), {
      startDate: newDate,
      tasks,
    });
    return newDate;
  } catch (error) {
    throw new Error("failed");
  }
};

// set new document:

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true,
// });

// tasks -> day1 -> []

//update:
// Create an initial document to update.
// const frankDocRef = doc(db, "users", "frank");
// await setDoc(frankDocRef, {
//     name: "Frank",
//     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
//     age: 12
// });

// To update age and favorite color:
// await updateDoc(frankDocRef, {
//     "age": 13,
//     "favorites.color": "Red"
// });

export { getUserData, updateTasksDay, createUserDoc };
