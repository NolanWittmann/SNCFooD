import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Questionnaire from "./components/pages/Questionnaire";
import Recette from "./components/pages/Recette"




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Home />} />
       <Route path="/questionnaire" element={<Questionnaire />} />
       <Route path="/recette" element={<Recette />} />
     </Routes>
     </BrowserRouter>       
    </div>
  );
}


export default App;
