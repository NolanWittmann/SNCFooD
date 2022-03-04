import React from "react";
import "../style/Recipecard.css";

function Recipecard({ recipe, title, image, ingredients }) {
  return (
  
    <div className="recipeCard">
      <img
        className="recipeCard__image"
        src={recipe["recipe"]["image"]}
        alt="recipe"
        onClick={() => window.open(recipe["recipe"]["url"])}
      />
      <p className="recipeCard__name">{recipe["recipe"]["label"]}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  
  );
}


export default Recipecard;
