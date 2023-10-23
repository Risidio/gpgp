import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";

const App= () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
