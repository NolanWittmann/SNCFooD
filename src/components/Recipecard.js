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
      <div className="recipeCard__text">
          <p className="recipeCard__text__name">{recipe["recipe"]["label"]}</p>
          <div className="recipeCard__text__ingredients">
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
          </div>
          <p className="recipeCard__text__co2Emissions">Classe d'émission de Co2: {recipe["recipe"]["co2EmissionsClass"]}</p>
      </div>
    </div>
  );
}


export default Recipecard;
