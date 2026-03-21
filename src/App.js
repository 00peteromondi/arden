import React from "react";
import "./App.css";
import MyNavbar from "./components/js/Navbar";
import Hero from "./components/js/Hero";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="MyApp">
      <MyNavbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
