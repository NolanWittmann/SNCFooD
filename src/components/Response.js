import "../style/Response.css"
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Recipecard from "./Recipecard"

function Response() {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("");
    const [healthLabel, setHealthLabel] = useState("vegetarian");

    

    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&health=${healthLabel}`

    const getRecipeInfo = async () => {
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
    };

    useEffect(() => {
      getRecipeInfo();
    }, [query]);
  
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipeInfo();
    };

    return (
        <div className ="response">
          <h1 onClick={getRecipeInfo}></h1>
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
        <input type="submit" value="Obtenez une recette" className="recipe__submit" />
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