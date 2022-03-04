import "../style/Response.css"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Recipecard from "./Recipecard"

function Response(props) {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [maj, setMaj] = useState(false);
  let maxCalories = 0;
  let minCalories = 0;

  function calories() {
    maxCalories = props.scoreNutri + 200;
    minCalories = props.scoreNutri - 200;
  }

  const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&health=${healthLabel}&calories=${minCalories}-${maxCalories}`;

  const getRecipeInfo = async () => {
    calories();
    const result = await axios.get(url);
    setRecipes(result.data.hits);
  }
    //console.log(result.data.hits);

    useEffect(() => {
      getRecipeInfo();
    }, [maj]);
  
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipeInfo();
    };

    return (
        <div className ="response">
          
          <form className="response__searchForm" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Tapez un ingrédient"
              autoComplete="Off"
              className="recipe__input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <select className="recipe__healthLabel">
            <option
                value=""
                onClick={() => {
                  setHealthLabel("");
                }}
                >
                Sans particularité
              </option>
              <option
                value="vegetarian"
                onClick={() => {
                  setHealthLabel("vegetarian");
                }}
                >
                Végétarien
              </option>
              <option
                value="gluten-free"
                onClick={() => {
                  setHealthLabel("gluten-free");
                }}
                >
                Sans gluten
              </option>
              <option
                value="pork-free"
                onClick={() => {
                  setHealthLabel("pork-free");
                }}
                >
                Sans porc
              </option>
              <option
                value="peanut-free"
                onClick={() => {
                  setHealthLabel("peanut-free");
                }}
                >
                Sans arachides
              </option>
              <option
                value="crustacean-free"
                onClick={() => {
                  setHealthLabel("crustacean-free");
                }}
                >
                Sans crustacés
              </option>
            </select>
        <input type="submit" value="Obtenez une recette" className="recipe__submit" onClick={getRecipeInfo}/>
      </form>

      <div className="response__recipes">
        {recipes.map((recipe) => {
          return <Recipecard 
                recipe={recipe}
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
           />;
        })}
      </div>

    </div>
  );
};

export default Response;