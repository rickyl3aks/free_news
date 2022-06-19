import "./App.css";
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeNews } from "./api/changeNews";
import Articles from "./articles/Articles";
import { NoResult } from "./no_result/NoResult";
import { SearchTab } from "./search_tab/SearchTab";
import Footer from "./footer/Footer";
import { mapping } from "./models/models";

const App = () => {
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const { data, isLoading, isError } = ChangeNews(type);

  if (isLoading) {
    return (
      <div>
        <SearchTab />
        {/*--- working on it ---*/}
        <Typography style={{ margin: "2rem" }} variant="h5" align="center">
          Loading...
        </Typography>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <SearchTab />
        {/*--- working on it ---*/}
        <Typography style={{ margin: "2rem" }} variant="h5" align="center">
          There has been an error... Please try again later
        </Typography>
      </div>
    );
  }

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
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            const result = (e.target as HTMLInputElement).value;
            setType(result);
          } else {
            return null;
          }
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <IconButton color="primary" sx={{ p: "10px" }}></IconButton>
      </Paper>

      <div
        onClick={scrollToTop}
        className="scrollUp"
        style={{ display: visible ? "inline" : "none" }}
      ></div>
      {/* <TabScrollButton
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        direction="left"
        orientation="vertical"
        sx={{
          display: "block",
          textAlign: "right",
          paddingRight: "1rem",
          position: "fixed",
          bottom: "1rem",
          zIndex: 1,
        }}
      /> */}

      <div className="container">
        {data.articles?.length > 0 ? (
          data.articles.map((e: mapping) => {
            return (
              <div key={e._id} className="boxes">
                <Articles
                  id={e._id}
                  summary={e.summary}
                  media={e.media}
                  published={e.published_date}
                  link={e.link}
                  title={e.title}
                />
              </div>
            );
          })
        ) : (
          <NoResult data={data} />
        )}
      </div>
      <Footer type={data.status} />
    </div>
  );
};

export default App;
