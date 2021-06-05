import './App.css';
import './key.js';
import axios from "axios";
import { useState } from 'react';
import RecipeTile from './recipeTile';

function App() {

  // Hooks - useState
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLables, sethealtLables] = useState("paleo");

  // API Key and ID information
  const YOUR_APP_ID = "1ff5a072";
  const YOUR_APP_KEY = "ac9f25d7a503d8d7208b4f4e5effe1c2";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722&health=${healthLables}`;

  // Fetching the recipes - JSON File
  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes()
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe App</h1>
      <form className="app_searchForm" onSubmit={submit}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />

        <select className="app_healthLabels" onChange={(e) => sethealtLables(e.target.value)} >
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="paleo">Paleo</option>
          <option value="dairy-free">Dairy-free</option>
          <option value="gluten-free">Gluten-free</option>
          <option value="wheat-free">Wheat-free</option>
        </select>

      </form>
      
      {/* Display the  Recipe Items */}
      <div className="app_recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
