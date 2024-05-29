import React from "react";
import "./recipe.css"

  
const Recipe = ({ url, title, energy, cholestrol, fats, sugar, calories, image, ingredients }) => { 
    // const APP_ID = 'a52b4d43';
    // const APP_KEY = 'e0e5c667605f5e91d8275c973531b80a';
    // const [recipes, setRecipes] = useState([]);

    // const getRecipes = async () => {
    //     const response = await fetch(
    //       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    //     );
    //     const data = await response.json();
    //     setRecipes(data.hits);
    //     console.log(data.hits);
    //   };
    const handleCardClick = () => {
        window.location.href = url;
    };

    return ( 
        <div className="recipe-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}> 
            <a href="#overview1"><img className="card-image" src={image} alt={title} /> </a>
            <p style={{ display: 'none' }}>{url}</p>
            <h1>{title}</h1> 
            <div className="nutrients">
                <p>Energy: {energy} Kcal</p>
                <p>Calories: {calories}</p> 
                <p>Cholestrol: {cholestrol} mg</p>
                <p>Fats: {fats} g</p>
                <p>Sugar: {sugar} g</p>
            </div>

            <ol className="ingredients" > 
                {(ingredients || []).map((ingredient, index) => ( 
                    <li key={index}>{ingredient.text}</li> 
                ))} 
            </ol> 
        </div> 
    ); 
} 
  
export default Recipe;