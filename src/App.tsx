import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
// import { StyledEngineProvider } from "@mui/system"; // ensures that the Material-UI styles are injected first, which is necessary for proper styling.
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { UserContextProvider } from "./context/UserContext.tsx";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

function App() {
  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    // <StyledEngineProvider>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeProvider>
    </CacheProvider>
    // </StyledEngineProvider>
  );
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
