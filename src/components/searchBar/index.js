import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

//Image
import searchIcon from "../../images/search-icon.svg";

//Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [searchVal, setSearchVal] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(searchVal);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, searchVal]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input
          type="text"
          placeholder="Search Movie"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
