import React, {useContext} from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <header className="header">
      <Link to='/'>Where in the world?</Link>
      <div className="mode-div">
        <FaMoon />
        <button
          onClick={toggleTheme}
        >
          {(theme==='dark')? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;