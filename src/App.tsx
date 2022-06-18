import "./App.css";
import * as React from "react";
import { useState } from "react";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as moment from "moment";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeNews } from "./api/changeNews";
import Footer from "./footer/Footer";
import Articles from "./articles/Articles";
import { mapping } from "./models/models";

const App = () => {
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState("");
  const [articles, setArticles] = useState(false);

  /*   const changeNews = (news: string) => {
    const options: object = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: news, lang: "en" },
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "28e6111661mshd7c5034e3fb20d2p17e77fjsn4cb05d352ad9",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setType(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }; */

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

  const { data, loading, error } = ChangeNews(type);

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
        {data.articles?.length > 0
          ? data.articles.map((e: mapping) => {
              return (
                <div key={e._id} className="boxes">
                  <Card
                    key={e._id}
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setOpen(e._id);
                      setArticles(!articles);
                    }}
                  >
                    <CardMedia
                      style={{ height: "15rem", objectPosition: "top" }}
                      component="img"
                      image={e.media}
                      alt={e.title}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ margin: ".5rem" }}
                    >
                      {e.title}
                    </Typography>
                    <Articles
                      id={e._id}
                      summary={e.summary}
                      open={open}
                      visible={articles}
                    />
                    {/*  <CardContent id={e._id}>
                    <div
                      style={{
                        display: open ? "inline" : "none",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {e.summary}
                      </Typography>
                    </div>
                  </CardContent> */}
                    <CardActions style={{ margin: ".5rem 0" }}>
                      <Button
                        size="small"
                        style={{ position: "absolute", bottom: 0, left: 5 }}
                      >
                        <Link href={e.link} target="_blank" underline="none">
                          Read More
                        </Link>
                      </Button>

                      <Button
                        className="btn"
                        style={{ position: "absolute", bottom: 0, right: 5 }}
                      >
                        {moment(e.published_date).startOf("hour").fromNow()}
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })
          : Object.values(data)[0] === "No matches for your search." && (
              <Typography variant="h5" color="white" align="center">
                Sorry we didn't find anything 😥, try again{" "}
              </Typography>
            )}
      </div>
      <Footer type={data.status} />
    </div>
  );
};

export default App;
