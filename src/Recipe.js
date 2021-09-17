import React from 'react'

const Recipe = ({title, image, cal, ingredients}) => {
    return (
        <div className="col-md-6 col-12 recipe_outer_wrap ">
            <h1 className="recipe_title">{title}</h1>
            <p style={{'fontWeight':'600'}}>Calories: {cal}</p>
            <ol>
            {ingredients.map(ingredient => (
                <li className="recipe_ingred">{ingredient.text}</li>
            ))}</ol>
            <div className="img">
            <img className="recipe_img" src={image} alt="pic" />
            </div>
            
        </div>
    )
}

export default Recipe
