import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListerPage from "./pages/ListerPage/ListerPage";
import Details from "./pages/ListerPage/Details";
import Context from "./pages/ListerPage/Context";
import People from "./pages/People/People";
import { QueryClient, QueryClientProvider } from "react-query";
import PeopleDetails from "./pages/People/PeopleDetails";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Context>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listerPage" element={<ListerPage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/people" element={<People />} />
            <Route path="/peopleDetails" element={<PeopleDetails />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </Context>
  );
};

export default App;
