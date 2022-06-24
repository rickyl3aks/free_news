import * as React from "react";
import { Skeleton } from "@mui/material";
import { Card } from "@mui/material";

export const Loading = () => {
  let skeleton = [];
  for (let n: number = 1; n <= 2; n++) {
    skeleton.push(n);
  }

  let rec: number[] = [];
  for (let n: number = 1; n <= 2; n++) {
    rec.push(n);
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
          <Card
            key={"key_" + e}
            sx={{
              maxWidth: 350,
              borderRadius: "0.3rem",
              margin: "1rem",
            }}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={363}
              height={180}
            />
            <Skeleton animation="wave" height={20} style={{ margin: 8 }} />
            {rec.map((e: number) => {
              return (
                <Skeleton
                  key={"key_" + e}
                  animation="wave"
                  height={20}
                  width="80%"
                  style={{ margin: 8 }}
                />
              );
            })}
          </Card>
        );
      })}
    </div>
  );
};
