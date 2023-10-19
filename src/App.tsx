import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { News } from "./pages/News";
import NewsDetail from "./components/news/NewsDetail";
import NewsCategoryList from "./components/news/NewsCategoryList";
import { NewsLayout } from "./components/news/NewsLayout";

const App= () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<NewsLayout />}>
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetail />} />
          <Route path="category/:categoryId" element={<NewsCategoryList />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
