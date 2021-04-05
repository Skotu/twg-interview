import { useEffect, useState } from "react";
import Axios from "axios";

import "./Search.css";
import SearchResults from "./SearchResults";
const SearchModal = ({ closeModal }) => {
  const [data, setData] = useState();
  const [results, setResults] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    Axios.get("/data").then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    if (data && inputValue !== "") {
      const filteredData = data
        .map((category) => {
          const filteredProducts = category.products.filter((p) =>
            p.name.toLowerCase().includes(inputValue.toLowerCase())
          );

          if (filteredProducts.length === 0) {
            return null;
          }

          return {
            ...category,
            products: filteredProducts,
          };
        })
        .filter(Boolean);

      setResults(filteredData);
    } else {
      setResults();
    }
  }, [data, inputValue]);

  return (
    <div className="SearchModal">
      <div className="SearchModal__header">
        <div className="SearchModal__header-title">
          <div>DIRECT REQUEST</div>
          <div className="SearchModal__close-btn" onClick={closeModal}></div>
        </div>
        <div className="SearchModal__header-form">
          <input
            className="SearchModal__input"
            type="text"
            placeholder="Machine name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
      </div>
      <SearchResults data={results} />
    </div>
  );
};

export default SearchModal;
