import "./App.css";
import axios from "axios";
import { useState } from "react";
import { TabScrollButton } from "@mui/material";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./footer";

const App = () => {
  const [type, setType] = useState("");
  const [visible, setVisible] = useState(false);

  const changeNews = (news) => {
    const options = {
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
  };

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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            changeNews(e.target.value);
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

      {/*       <div
        onClick={scrollToTop}
        className="scrollUp"
        style={{ display: visible ? "inline" : "none" }}
      ></div> */}
      <TabScrollButton
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
      />

      <div className="container">
        {type.articles !== undefined ? (
          type.articles.map((e) => {
            return (
              <div key={e.id + e.link} className="boxes">
                <Card style={{ height: "50rem", position: "relative" }}>
                  <CardMedia
                    style={{ height: "15rem", objectPosition: "top" }}
                    component="img"
                    image={e.media}
                    alt={e.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {e.summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      style={{ position: "absolute", bottom: 0 }}
                    >
                      <Link href={e.link} target="_blank" underline="none">
                        Read More
                      </Link>
                    </Button>

                    <Button
                      className="btn"
                      style={{ position: "absolute", bottom: 0, right: 0 }}
                    >
                      {moment(e.published_date).startOf("hour").fromNow()}
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        ) : typeof type === "string" ? null : (
          <Typography variant="h5" color="white" align="center">
            Sorry we didn't find anything 😥, try again{" "}
          </Typography>
        )}
      </div>
      <Footer type={type} />
    </div>
  );
};

export default App;
