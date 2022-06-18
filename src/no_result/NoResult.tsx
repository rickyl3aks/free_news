import * as React from "react";
import { Typography } from "@mui/material";
import { data } from "../models/models";

export const NoResult: React.FC<data> = ({ data }) => {
  return (
    <div>
      {Object.values(data)[0] === "No matches for your search." && (
        <Typography variant="h5" color="white" align="center">
          Sorry we didn't find anything 😥, try again{" "}
        </Typography>
      )}
    </div>
  );
};
