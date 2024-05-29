import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.js";
import Recipe from './components/recipe-card/recipe.js';
import Footer from "./components/footer/footer.js";
import About from "./components/about/about.js";
// import Overview from "./components/overview/overview.js"
// import HomePage from './components/homepage/homepage.js';

function App() {
  const APP_ID = 'a52b4d43';
  const APP_KEY = 'e0e5c667605f5e91d8275c973531b80a';
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (query) {
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      // https://api.edamam.com/api/recipes/v2/by-uri?uri=string&app_id=abc&app_key=aba
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  
  return (
    <>
      <Navbar 
        updateSearch={updateSearch} 
        getSearch={getSearch} 
        search={search} 
      />
      {/* <div className="recipes">
        {recipes.map(overview => (
          <Overview
            key={overview.recipe.label}
            title={overview.recipe.label}
            cuisine={overview.recipe.cuisineType}
            dishType={overview.recipe.dishType}
            image={overview.recipe.image}
            ing={overview.recipe.ingredients}
          />
        ))}
      </div> */}
      {/* <HomePage/> */}
      <section>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            energy={recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
            cholestrol={recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(2)}
            fats={recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}
            sugar={recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}
            calories={recipe.recipe.calories.toFixed(2)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      </section>
      <About/>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
