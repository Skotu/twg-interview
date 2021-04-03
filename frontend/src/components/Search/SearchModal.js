import { useState } from "react";

import "./Search.css";

const SearchModal = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="SearchModal">
      <div className="SearchModal__content">
        <div className="SearchModal__header">
          <div>DIRECT REQUEST</div>
          <div className="SearchModal__close-btn" onClick={closeModal}></div>
        </div>
        <div className="SearchModal__form">
          <input
            className="SearchModal__input"
            type="text"
            placeholder="Machine name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
