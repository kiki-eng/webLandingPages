import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/public/About";
import Home from "./pages/public/Home";
import ScrollToTop from "./components/ScrollToTop";
import Faqs from "./pages/public/Faqs";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
