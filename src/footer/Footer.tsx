import * as React from "react";
import { Link } from "@material-ui/core";
import { Typography } from "@mui/material";
import "./Footer.css";
import { types } from "../models/models";

const footer: React.FC<types> = ({ type }) => {
  return (
    <div className={type === "ok" ? "footer" : "footerBtn"}>
      <Typography variant="h5">
        This website made possible by{" "}
        <Link
          href="https://newscatcherapi.com/"
          target="_blank"
          underline="none"
        >
          NewsCatcher's News API
        </Link>{" "}
      </Typography>
    </div>
  );
};

export default footer;
