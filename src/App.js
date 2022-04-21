import React from "react";
import Header from "./components/header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
