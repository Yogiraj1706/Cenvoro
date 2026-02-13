import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import HireTalent from "./Pages/HireTalent";
import Footer from "./Pages/Footer";
import "./App.css";
import Candidates from "./Pages/Services/Candidates";
import Institute from "./Pages/Services/Institute";
import Employers from "./Pages/Services/Employers";
import Login from "./Pages/Login";


function App() {

  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);


  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Space below fixed navbar */}
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Contact />
              </>
            }
          />

          {/* SERVICE DETAILS PAGES */}
          <Route path="/services/candidates" element={<Candidates />} />
          <Route path="/services/institutes" element={<Institute />} />
          <Route path="/services/employers" element={<Employers />} />

          

          <Route path="/hiretalent" element={<HireTalent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
