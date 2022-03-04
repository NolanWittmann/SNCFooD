import React from "react";
import "../style/Recipecard.css";

function Recipecard({ recipe, title, image, ingredients }) {
  return (
  
    <div className="recipeCard">
     <div className="recipeCard__image__name">
     <p className="recipeCard__name">{recipe["recipe"]["label"]}</p>
      <img
        className="recipeCard__image"
        src={recipe["recipe"]["image"]}
        alt="recipe"
        onClick={() => window.open(recipe["recipe"]["url"])}
      />
      
      <ul>
        {ingredients.map((ingredient, index) => (
          <li className="recipeCard__name__ingre" key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}


export default Recipecard;
