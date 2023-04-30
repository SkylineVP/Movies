import React from "react";
import classes from "./Loader.module.scss";
import { CircularProgress } from "@mui/material";
const Loader = () => {
  return (
    <div className={classes.container}>
      <CircularProgress
        sx={{
          color: "#09ABC3",
        }}
      />
    </div>
  );
};

export default Loader;
