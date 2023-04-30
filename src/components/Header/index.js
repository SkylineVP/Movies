import React, { memo } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

const Header = () => {
  return (
    <header className={classes.container}>
      <Link to={"/"}>
        <h1 className={classes.title}>Wookie Movies</h1>
      </Link>
      <SearchInput />
    </header>
  );
};

export default memo(Header);
