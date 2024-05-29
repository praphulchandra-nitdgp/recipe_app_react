import React from "react";
import "./overview.css";

const Overview =({ title, cuisine, dishType, image, ingredients }) => {
    
    return (
        <section className="overview" id="overview1">
                              
            <div className="ing-card" value="">
                <img src={image} alt="dish image" className="card-image"/>
                <div className="card-body">
                    <h2 className="title">{title}</h2>
                    <div className="dish-info">
                        <p>{dishType}</p>
                        <p>{cuisine}</p>
                    </div>
                    <ol className="ing" > 
                        {(ingredients || []).map((ingredient, index) => ( 
                        <li key={index}>{ingredient.text}</li> 
                        ))} 
                    </ol>               
                </div>
            </div>

        </section>
    );
}

export default Overview;