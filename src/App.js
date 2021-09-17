import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';

import './App.css';

const App = () => {

  const APP_ID = 'e39d7ee9';
  const APP_KEY = 'e831874e841c994290525501f24e7e81'

  const [recipes, setRecipes] = useState([])
  const[input, setInput] = useState('')
  const[query, setQuery]= useState('')

  useEffect(() => {
    getRecipes();
  }, [query] )

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const getInput = (e)=>{
    setInput(e.target.value)
    console.log(e.target.value);
  }
  const onSubmit =(e)=>{
    e.preventDefault();
    setQuery(input);
  }
  return (
    <div className="App">
    <h1 style={{color: '#fff'}}>Food Recipe using API</h1>
      <form onSubmit={onSubmit} className="mt-4">
        <input type="text" onChange={getInput} value={input} />
        <button>Search</button>
        <div className="row recipe_main">
        
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} cal={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} />
        ))} 
        </div>
      </form>
    </div>
  );
}

export default App;
