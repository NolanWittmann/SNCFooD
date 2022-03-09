import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Notice from "./components/pages/Notice";
import Questionnaire from "./components/pages/Questionnaire";
import Recette from "./components/pages/Recette"




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Home />} />
       <Route path="/notice" element={ <Notice />} />
       <Route path="/questionnaire" element={<Questionnaire />} />
       <Route path="/recette" element={<Recette />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
     </BrowserRouter>       
    </div>
  );
}


export default App;
