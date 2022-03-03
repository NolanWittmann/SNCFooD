import React from "react";
import Questionnaire from "./components/Questionnaire.js";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Response from "./components/Response.js";

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
