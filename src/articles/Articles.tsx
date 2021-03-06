import * as React from "react";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import * as moment from "moment";
import { Article } from "../models/models";

const Articles: React.FC<Article> = ({
  id,
  summary,
  title,
  link,
  media,
  published,
  author,
  rights,
}) => {
  const [open, setOpen] = useState("");
  const [articles, setArticles] = useState(false);

  return (
    <div>
      <Card
        key={id}
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => {
          setOpen(id);
          setArticles(!articles);
        }}
      >
        <CardMedia
          style={{ height: "15rem", objectPosition: "top" }}
          component="img"
          image={
            ![null, ""].includes(media)
              ? media
              : require("../images/placeholder_news.jpeg")
          }
          alt={title}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ margin: ".5rem" }}
        >
          {title}
        </Typography>{" "}
        <CardContent
          id={id}
          style={{
            display: open === id && articles ? "inline" : "none",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ margin: ".5rem" }}
          >
            {summary}
            <Link href={link} target="_blank" underline="hover">
              {" "}
              Read More...
            </Link>
          </Typography>
        </CardContent>
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
        <div
          style={{
            borderLeft: ".3rem solid black",
            marginLeft: 8,
            marginBottom: 5,
          }}
        >
          {author && (
            <Typography
              variant="subtitle2"
              mt={10}
              style={{
                color: "#1976d2",
                margin: "0 .5rem",
              }}
            >
              {author}
            </Typography>
          )}
          <Typography
            variant="subtitle2"
            style={{
              color: "#1976d2",
              margin: "0 .5rem",
            }}
          >
            {rights}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          style={{
            color: "#1976d2",
            position: "absolute",
            right: ".5rem",
            bottom: 0,
          }}
        >
          {moment(published).startOf("hour").fromNow()}
        </Typography>
      </Card>
    </div>
  );
};

export default Articles;
