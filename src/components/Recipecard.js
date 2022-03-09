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
      <div className="recipeCard__text">
          <p className="recipeCard__text__name">{recipe["recipe"]["label"]}</p>
          <div className="recipeCard__text__ingredients">
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
          </div>
          {/* <p className="recipeCard__text__co2Emissions">co²: {recipe["recipe"]["co2EmissionsClass"]}</p> */}
      </div>
    </div>
    </div>
  );
}


export default Recipecard;
