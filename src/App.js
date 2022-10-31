import { useEffect, useState } from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies/:movieId" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
