// import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/public/About";
import Home from "./pages/public/Home";
import ScrollToTop from "./components/ScrollToTop";
import Faqs from "./pages/public/Faqs";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <div>
//       <Navigation />
//       {/* <Header data={landingPageData.Header} /> */}
//       {/* <Features data={landingPageData.Features} /> */}
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />

//       {/* <Testimonials data={landingPageData.Testimonials} />

//       <Gallery data={landingPageData.Gallery} />

//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} /> */}
//     </div>
//   );
// };

// export default App;

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
