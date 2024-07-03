// const Navbar = () => {
//   return (

//   );
// };

// export default Navbar;
// import { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Slide from "@mui/material/Slide";
// import { styled } from "@mui/system";

// const AppBarStyled = styled(AppBar)({
//   top: 0,
//   bottom: "auto",
// });

// const DrawerPaperStyled = styled(Drawer)({
//   width: "75%",
// });

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = (open: any) => (event: any) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setOpen(open);
//   };

//   const menuItems = ["Home", "Tasks", "Recipes", "Shakes", "Exercises"];

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <CssBaseline />
//       <AppBarStyled position="fixed">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Navbar
//           </Typography>
//         </Toolbar>
//       </AppBarStyled>
//       <DrawerPaperStyled
//         anchor="left"
//         open={open}
//         onClose={toggleDrawer(false)}
//       >
//         <Slide direction="right" in={open} mountOnEnter unmountOnExit>
//           <List>
//             {menuItems.map((text, index) => (
//               <ListItem button key={index}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Slide>
//       </DrawerPaperStyled>
//     </Box>
//   );
// }

// export default Navbar;
