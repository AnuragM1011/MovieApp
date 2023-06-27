
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/homes/Home';
import MovieList from './components/movielist/movieList';
import Movie from "./pages/moviedetails/movieDetails"


function App() {
  return (
    <>
      <div className="app">

        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>    /*ask for firstappe*/
            <Route path="movie/:id" element={ <Movie />}></Route>
            {/* <Route path="movies/:type" element={<h1>Movie list page</h1>}> </Route> */}
            <Route path="movies/:type" element= {<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>

          </Routes>

        </Router>
      </div >
    </>
  )
}

export default App;
