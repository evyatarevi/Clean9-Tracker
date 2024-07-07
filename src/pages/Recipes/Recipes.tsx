import { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Recipe from "../../components/Recipe/Recipe";
import bgImages from "../../images/bgImages";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getRecipesData } from "../../api/recipesApi";
import { recipesDataProps } from "../../types";
import bgLemon from "../../assets/images/background/bgFruits.jpg";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipesData, setRecipesData] = useState<recipesDataProps>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();

  const filteredCards = recipesData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setIsPending(true);
    setError("");
    const fetchRecipes = async () => {
      try {
        const res = await getRecipesData();
        if (res) {
          setRecipesData(res);
        }
      } catch (error: unknown) {
        // const errorMessage = checkTypeError(error);
        setError("failed to fetch recipes");
      } finally {
        setIsPending(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <Box
      sx={{
        height: isPending ? "100vh" : "",

        backgroundImage: `url(${bgLemon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header imageUrl={bgImages.recipesHeaderBg} text="המתכונים שלי" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        m="20px"
        pb="100px"
      >
        <Box sx={{ backgroundColor: "rgba(255,255,255,1" }}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>
        {isPending && <CircularProgress size={100} />}
        {filteredCards.map((recipe, index) => {
          return <Recipe {...recipe} key={index} />;
        })}
      </Box>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default Recipes;
