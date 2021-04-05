import { useEffect, useState, useCallback } from "react";
import Axios from "axios";
import debounce from "debounce";

import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

import "./Search.css";

const Search = () => {
  const [results, setResults] = useState();
  const [inputValue, setInputValue] = useState("");

  const getData = useCallback(debounce(query => {
    Axios.get("/data", {
      params: {
        query
      }
    }).then((response) => setResults(response.data))
  }, 200), []);

  useEffect(() => {
    if (inputValue !== "") {
      getData(inputValue)
    }
  }, [getData, inputValue]);

  return (
    <div className="Search">
      <SearchHeader inputValue={inputValue} setInputValue={setInputValue} />
      <SearchResults data={results} />
    </div>
  );
};

export default Search;
