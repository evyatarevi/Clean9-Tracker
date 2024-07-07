import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { type SearchBarProps, type ChangeHandler } from "../../types";

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleChange: ChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <TextField
      variant="standard"
      placeholder="חיפוש..."
      value={searchQuery}
      onChange={handleChange}
      sx={{ marginBottom: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          padding: "10px 14px",
        },
      }}
    />
  );
};

export default SearchBar;
