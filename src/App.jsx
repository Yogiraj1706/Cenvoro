import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import "./App.css";

function App() {
  
  return (
    <>
    
      <Navbar />

      {/* Space below navbar */}
      <div style={{ marginTop: "70px" }}>
        <Home />
        <About/>
        <Services />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
