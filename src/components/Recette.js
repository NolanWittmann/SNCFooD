import React, { useEffect } from "react";
import Response from "./Response";

const Recette = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      
          <Response scoreNutri={props.scoreNutri} />
          <h1>yuhou</h1>
     
    </div>
  );
};

export default Recette;
