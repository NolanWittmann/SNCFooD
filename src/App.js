import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Questionnaire from "./components/Questionnaire";
import Recette from "./components/Recette";
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/recette" element={<Recette />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}


export default App;
