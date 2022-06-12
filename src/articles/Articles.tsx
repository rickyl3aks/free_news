import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Article } from "../models/models";

const Articles: React.FC<Article> = ({ id, summary, open, visible }) => {
  return (
    <div>
      {" "}
      <CardContent
        id={id}
        style={{
          display: open === id && visible ? "inline" : "none",
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
    </div>
  );
};

export default Articles;
