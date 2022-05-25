import { useState } from "react";
import './RecipeAPI.css'
import Axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import env from 'react-dotenv';

function RecipeAPI() {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    let API_ID = env.REACT_APP_EDAMAM_API_ID 
    let API_KEY = env.REACT_APP_EDAMAM_API_KEY   

    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    // Getting Data
    async function getRecipes() {
        let result = await Axios.get(url);
        console.log(result.data)

        setRecipes(result.data.hits);
    }

    // Submit form
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }
   
    return (
        <div className="recipe">
            <div className="recipe_container">
                <h3 onClick={getRecipes} >Food Recipe App</h3>

                {/* Form search */}
                <form onSubmit={onSubmit} className="recipe_searchForm">
                    {/* Search Input */}
                    <TextField
                        id="outlined-basic"
                        label="Search a recipe"
                        variant="outlined"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        color="primary"
                        style={{ width: '250px', textAlign: 'center'}}
                    />

                    {/* Search Submit Btn */}
                    <input
                        type="submit"
                        value="Search"
                        className="recipe_submit"
                    />

                </form>
            </div>

            {/* Render Data */}
            <div className="recipe_recipes">
                {recipes.map(recipe => {
                    return <RecipeCard recipe={recipe} />
                })}
            </div>

        </div>
    );
}

export default RecipeAPI;
