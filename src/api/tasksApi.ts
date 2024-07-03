import { db } from "../config/firebaseConfig";
import {
  doc,
  updateDoc,
  getDoc,
  // collection,
  // addDoc,
  // getDocs,
} from "firebase/firestore";
import { TaskArray } from "../types";

// add
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// get
// let dailyTasks: [] ;
// const getTasks = async (): Promise<[]> => {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   querySnapshot.forEach((doc) => {
//     dailyTasks = doc.data().dailyTasks;
//   });
//   return dailyTasks;
// };

// get
//
// const getTasks = async (): Promise<Task[]> => {
//   try {
//     const docRef = doc(db, "tasks", "sKfceSJfc6wTARXMqtBW");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       return docSnap.data().dailyTasks;
//     } else {
//       // docSnap.data() will be undefined in this case
//       return [];
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch tasks");
//   }
// };

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
  console.log("userId: ", userId);
  console.log("day: ", day);
  console.log("tasks: ", tasks);
  try {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, {
      // [`tasks.day${day}`]: tasks,
      [`tasks.${day}`]: tasks,
    });
    return "update successful";
  } catch (error) {
    throw new Error("Failed to update tasks");
  }
};

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

export { getUserData, updateTasksDay };
