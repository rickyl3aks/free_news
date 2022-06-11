import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Articles = ({ id, summary, open }) => {
  return (
    <div>
      {" "}
      <CardContent
        id={id}
        style={{
          display: open ? "inline" : "none",
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
