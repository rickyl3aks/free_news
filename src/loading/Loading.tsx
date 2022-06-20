import * as React from "react";
import { Skeleton } from "@mui/material";

export const Loading = () => {
  let skeleton = [];
  for (let n: number = 1; n <= 2; n++) {
    skeleton.push(n);
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "0.3rem",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {skeleton.map((e: number) => {
        return (
          <Skeleton
            key={"key_" + e}
            animation="wave"
            sx={{
              borderRadius: "0.3rem",
              margin: "1rem",
            }}
            variant="rectangular"
            width={363}
            height={280}
          />
        );
      })}
    </div>
  );
};
