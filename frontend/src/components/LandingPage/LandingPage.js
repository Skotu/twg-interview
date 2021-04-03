import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage App_content">
      <Link to="/search">
        {" "}
        <button className="button">Start inquiry</button>
      </Link>
    </div>
  );
};

export default LandingPage;
