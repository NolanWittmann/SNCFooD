import React from "react";
import Questionnaire from "./components/Questionnaire.js";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Questionnaire />
      <Footer />
    </div>
    
  );
}


export default App;
