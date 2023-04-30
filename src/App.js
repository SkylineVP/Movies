import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
