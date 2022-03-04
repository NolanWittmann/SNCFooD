import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Questionnaire from "./components/Questionnaire.js";
import Recette from "./components/Recette";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/recettes" element={<Recette />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
