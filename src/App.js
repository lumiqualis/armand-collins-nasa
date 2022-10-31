import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />
        <Route path="/movies/:movieId" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
