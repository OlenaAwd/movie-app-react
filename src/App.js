import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("GTM-KGLQ4R8");
    TagManager.initialize({ gtmId: "GTM-KGLQ4R8" });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
