import React, { useState, useEffect } from 'react';
import Recipe from '../recipe-card/recipe';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('chicken');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Simulate fetching recipes based on the search query
        const fetchedRecipes = [
            {
                url: 'https://example.com/recipe1',
                title: 'Chicken Curry',
                energy: 200,
                cholestrol: 50,
                fats: 10,
                sugar: 5,
                calories: 300,
                image: 'https://example.com/image1.jpg',
                ingredients: [{ text: 'Chicken' }, { text: 'Curry Powder' }]
            },
            {
                url: 'https://example.com/recipe2',
                title: 'Grilled Chicken',
                energy: 250,
                cholestrol: 60,
                fats: 12,
                sugar: 4,
                calories: 350,
                image: 'https://example.com/image2.jpg',
                ingredients: [{ text: 'Chicken' }, { text: 'Spices' }]
            }
        ];
        setRecipes(fetchedRecipes);
    }, [searchQuery]);

    return (
        <div>
            <h1>Recipes for {searchQuery}</h1>
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <Recipe key={index} {...recipe} />
                ))}
            </div>
        </div>
    );
};



export default HomePage;
