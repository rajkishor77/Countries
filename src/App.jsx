import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import PageNotFound from "./components/PageNotFound";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/alpha/:cca3" element={<CountryDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
