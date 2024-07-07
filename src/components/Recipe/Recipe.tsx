import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
// import imgObj from "../../images/bgImages.ts";
import { type recipeProps } from "../../types.ts";

const Recipe = ({ title, description, imgUrl }: recipeProps) => {
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
    <Box>
      <Card sx={{ width: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt={"imageAlt"}
        />
        <CardContent sx={{ paddingBottom: "0 !important" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showFullText ? description : truncateText(description, 39)}
          </Typography>
          <Button
            size="small"
            onClick={handleToggleText}
            // sx={{ padding: 0, margin: 0 }}
          >
            {showFullText ? "קרא פחות" : "קרא עוד"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Recipe;
