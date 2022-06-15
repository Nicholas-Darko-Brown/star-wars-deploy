import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListerPage from "./pages/ListerPage/ListerPage";
import Details from "./pages/ListerPage/Details";
import Context from "./pages/ListerPage/Context";

const App = () => {
  return (
    <Context>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listerPage" element={<ListerPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </Context>
  );
};

export default App;
