import { useHistory } from 'react-router-dom'

import "./Search.css";

const SearchHeader = ({ inputValue, setInputValue }) => {
    let history = useHistory();
    const closeModal = () => history.push("/");

    return (
        <div className="SearchHeader">
            <div className="SearchHeader-title">
                <div>DIRECT REQUEST</div>
                <div className="SearchHeader__close-btn" onClick={closeModal}></div>
            </div>
            <div className="SearchHeader-form">
                <input
                    className="SearchModal__input"
                    type="text"
                    placeholder="Machine name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
            </div>
        </div>
    );
};

export default SearchHeader;
