import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React, { useEffect } from "react";
// import { auth } from "./firebase";
// import { navigate } from "gatsby"; // Assuming you're using Gatsby for routing

// const RootLayout = () => {
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (!user) {
//         navigate("/");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return <div>{/* Your application content and routing logic */}</div>;
// };

// export default RootLayout;
// ------------------
// how logout:
//   await signOut(auth);
// };
