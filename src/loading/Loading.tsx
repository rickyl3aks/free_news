import * as React from "react";
import { Skeleton } from "@mui/material";

export const Loading = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.3rem",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      <Skeleton
        animation="wave"
        sx={{
          borderRadius: "0.3rem",
          margin: "1rem",
        }}
        variant="rectangular"
        width={363}
        height={280}
      ></Skeleton>
      <Skeleton
        animation="wave"
        sx={{
          borderRadius: "0.3rem",
          margin: "1rem",
        }}
        variant="rectangular"
        width={363}
        height={280}
      ></Skeleton>
    </div>
  );
};
