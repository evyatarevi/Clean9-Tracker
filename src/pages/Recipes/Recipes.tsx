import { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Recipe from "../../components/Recipe/Recipe";
import bgImages from "../../images/bgImages";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getRecipesData } from "../../api/recipesApi";
import { recipesDataProps } from "../../types";

// const recipesData = [
//   {
//     title: "עוף",
//     description:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero veritatis voluptatum odit repellat veniam maiores illo, obcaecati vitae sit sunt hic quo fuga ab earum labore quos eveniet culpa dolorum nostrum accusantium? At officiis non, temporibus totam iusto libero!",
//     imgUrl: "",
//   },
//   {
//     title: "title",
//     description:
//       " Lorem עוף dolor sit amet consectetur adipisicing elit. Cumque libero veritatis voluptatum odit repellat veniam maiores illo, obcaecati vitae sit sunt hic quo fuga ab earum labore quos eveniet culpa dolorum nostrum accusantium? At officiis non, temporibus totam iusto libero!",
//     imgUrl: "",
//   },
//   {
//     title: "title",
//     description:
//       " Lorem שניצל dolor sit amet consectetur adipisicing elit. Cumque libero veritatis voluptatum odit repellat veniam maiores illo, obcaecati vitae sit sunt hic quo fuga ab earum labore quos eveniet culpa dolorum nostrum accusantium? At officiis non, temporibus totam iusto libero!",
//     imgUrl: "",
//   },
// ];

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
  console.log("filteredCards: ", filteredCards);

  useEffect(() => {
    setIsPending(true);
    setError("");
    const fetchRecipes = async () => {
      try {
        const res = await getRecipesData();
        console.log("recipies: ", res);
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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {isPending && <CircularProgress size={100} />}
        {filteredCards.map((recipe, index) => (
          <Recipe {...recipe} key={index} />
        ))}
      </Box>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default Recipes;
