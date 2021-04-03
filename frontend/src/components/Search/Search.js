import { useState } from "react";
import { useHistory } from "react-router";

import SearchModal from "./SearchModal";

import "./Search.css";

const Search = () => {
  let history = useHistory();
  const closeModal = () => history.push("/");

  return (
    <div className="Search">
      <SearchModal closeModal={closeModal}></SearchModal>
    </div>
  );
};

export default Search;
