import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import Explore from "./pages/Explore/Explore"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Search from "./pages/Search/Search"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/explore/:type" element={<Explore />} />
        <Route path="/search/:moviename" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
