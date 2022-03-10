import "../style/Response.css"
import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select'
import axios from 'axios';
import Recipecard from "./Recipecard"
import CalorieContext from "./context/CalorieContext";


function Response(props) {

  const { scoreNutri} = useContext(CalorieContext)

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [cuisineTypeLabel, setCuisineTypeLabel] = useState("french");
  const [mealTypeLabel, setMealTypeLabel] = useState("Lunch");
  const [dietLabel, setDietLabel] = useState("balanced");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  
  const [maj, setMaj] = useState(false);
  

  let maxCalories = 0;
  let minCalories = 0;

  function calories() {
    maxCalories = props.scoreNutri + 200;
    minCalories = props.scoreNutri - 200;
  }

  {/* dropdown selectors lables and API matching values */}
  const cuisineTypeOptions = [
    { value: "French", label: "française" },
    { value: "American", label: "américaine" },
    { value: "Asian", label: "asiatique" },
    { value: "Indian", label: "indienne" },
    { value: "Kosher", label: "casher" },
    { value: "Mediterranean", label: "méditerranéenne" },
    { value: "American", label: "américaine" }
  ]

  const mealTypeOptions = [
    { value: "Breakfast", label: "petit déjeuner" },
    { value: "Lunch", label: "déjeuner" },
    { value: "Dinner", label: "dîner" },
    { value: "Snack", label: "goûter, en-cas" },
    { value: "Teatime", label: "thé" },
  ]

  const dietOptions = [
    { value: "balanced", label: "équilibré" },
    { value: "high-fiber", label: "riche en fibres" },
    { value: "high-protein", label: "riche en protéines" },
    { value: "low-carb", label: "peut sucré" },
    { value: "low-fat", label: "faible en gras" },
    { value: "low-sodium", label: "faible en sel" },
  ]

  const healthOptions = [
    { value: "vegetarian", label: "végérarien" },
    { value: "pork-free", label: "sans porc" },
    { value: "peanut-free", label: "sans arachides" },
    { value: "crustacean-free", label: "sans crustacés" },
    { value: "egg-free", label: "sans oeufs" },
    { value: "sesame-free", label: "sans sésame" },
    { value: "fish-free", label: "sans poisson" },
  ]

  const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&health=${healthLabel}&health=alcohol-free&cuisineType=${cuisineTypeLabel}&cuisineType=${cuisineTypeLabel}&mealType=${mealTypeLabel}&diet=${dietLabel}`
  

  const getRecipeInfo = async () => {
    calories()
    const result = await axios.get(url);
    setRecipes(result.data.hits);
  };

  useEffect(() => {
    getRecipeInfo();
  }, [maj]);

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="response">
      <div className="response__parameters">
        <form onSubmit={onSubmit} className="response__form">
          {/* input for searching ingredients. The API accept english only. */}
          <input
            type="text"
            placeholder="Tapez un ingrédient"
            autoComplete="Off"
            className="response__ingredient__input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          {/* dropdown selectors for API's url filling */}
          <Select
            options={cuisineTypeOptions}
            placeholder={"Pays..."}
            className="response__cuisineType__select"
            name="mealsType"
            onChange={setCuisineTypeLabel}
          />
          <Select
            options={mealTypeOptions}
            placeholder={"Repas..."}
            className="response__mealType__select"
            name="repas"
            onChange={setMealTypeLabel}
          />
          <Select
            options={dietOptions}
            placeholder={"Régime..."}
            className="response__diet__select"
            name="regime"
            onChange={setDietLabel}
          />
          <Select
          
            options={healthOptions}
            placeholder={"restrictions..."}
            className="response__health__select"
            isMulti
            name="particularités"
            onChange={setHealthLabel}
          />

          <input type="submit" value="Obtenez des recettes" className="recipe__submit" onClick={getRecipeInfo} />

        </form>
      </div>

      {/* component */}
      <div className="response__recipes">
        {recipes.map((recipe) => {
          return <Recipecard
            recipe={recipe}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            emissions={recipe.recipe.co2EmissionsClass}
          />
        })}
      </div>
    </div>
  )
}

export default Response ;