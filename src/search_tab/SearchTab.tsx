import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export const SearchTab = () => {
  return (
    <div>
      <Typography style={{ margin: "2rem" }} variant="h5" align="center">
        Search for worldwide news articles published online 🗞
      </Typography>
      <Paper
        className="input"
        elevation={10}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <IconButton color="primary" sx={{ p: "10px" }}></IconButton>
      </Paper>
    </div>
  );
};
