import * as React from "react";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import { Link } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as moment from "moment";
import { Article } from "../models/models";

const Articles: React.FC<Article> = ({
  id,
  summary,
  title,
  link,
  media,
  published,
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
        <CardActions style={{ margin: ".5rem 0" }}>
          <Button
            size="small"
            style={{ position: "absolute", bottom: 0, left: 5 }}
          >
            <Link href={link} target="_blank" underline="none">
              Read More
            </Link>
          </Button>

          <Button
            className="btn"
            style={{ position: "absolute", bottom: 0, right: 5 }}
          >
            {moment(published).startOf("hour").fromNow()}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Articles;
