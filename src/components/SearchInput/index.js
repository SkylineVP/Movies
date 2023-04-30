import React, { memo } from "react";
import classes from "./SearchInput.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../../store/services/Movies/selectors";
import { setSearch } from "../../store/reducers/Search";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(searchSelector);
  const onInputChange = ({ target: { value } }) => {
    dispatch(setSearch(value));
  };

  return (
    <label className={classes.inputLabel}>
      <SearchIcon />
      <div className={classes.fieldContainer}>
        <input
          value={searchValue}
          className={classes.input}
          name="myInput"
          onChange={onInputChange}
        />
      </div>
    </label>
  );
};

export default memo(SearchInput);
