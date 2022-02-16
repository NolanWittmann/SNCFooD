import React from "react";
import Questionnaire from "./components/Questionnaire.js";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo.js";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Questionnaire />
      <Footer />
    </div>
    
  );
}


export default App;
