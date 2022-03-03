import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Questionnaire from "./components/Questionnaire.js";
import Response from "./components/Response";




function App() {
  return (
    <div className="App">
      <Navigation />
      <Questionnaire />
      <Response />
      <Footer />
    </div>

  );
}


export default App;
