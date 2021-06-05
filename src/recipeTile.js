import React from 'react';
import "./recipeTile.css";
function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className="recipeTile" onClick={() => {
                window.open(recipe["recipe"]["url"]);
            }}>
                <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt="abc" />
                <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}

export default RecipeTile


