import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import imgObj from "../../images/bgImages.ts";

const description =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates, fugit facere dolorum recusandae veniam praesentium fugiat obcaecati consectetur officia!";

const Recipe = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      m="20px"
      pb="100px"
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={imgObj.headerImg}
          alt={"imageAlt"}
        />
        <CardContent sx={{ paddingBottom: "0 !important" }}>
          <Typography gutterBottom variant="h5" component="div">
            {"title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showFullText ? description : truncateText(description, 39)}
          </Typography>
          <Button
            size="small"
            onClick={handleToggleText}
            // sx={{ padding: 0, margin: 0 }}
          >
            {showFullText ? "Show Less" : "Read More"}
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={imgObj.headerImg}
          alt={"imageAlt"}
        />
        <CardContent sx={{ paddingBottom: "0 !important" }}>
          <Typography gutterBottom variant="h5" component="div">
            {"title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showFullText ? description : truncateText(description, 39)}
          </Typography>
          <Button
            size="small"
            onClick={handleToggleText}
            // sx={{ padding: 0, margin: 0 }}
          >
            {showFullText ? "Show Less" : "Read More"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  // <Box display="flex">
  //   <Box>
  //     <Typography
  //       variant="h5"
  //       component="div"
  //       //   color="white"
  //       fontWeight="bold"
  //       sx={{
  //         textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  //       }}
  //     >
  //       כותרת
  //     </Typography>
  //     <Typography variant="body1" component="div">
  //       אני עייף והולך לישוןת אני הולך לישוןת אני עייף ןהןלך לישוןץ אני עייףץ
  //       עייף אני הולך לישוןץ בננה, תפןה, תפוזץ
  //     </Typography>
  //   </Box>

  //   <Box
  //     sx={{
  //       width: 200,
  //       //   height: 150,
  //       overflow: "hidden",
  //     }}
  //   >
  //     <Box
  //       component="img"
  //       sx={{
  //         width: "100%",
  //         height: "100%",
  //         objectFit: "cover",
  //       }}
  //       alt="recipe image"
  //       src={imgObj.loginImg}
  //     ></Box>
  //   </Box>
  // </Box>
  //   );
};

export default Recipe;
