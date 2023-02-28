import './App.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './components/card.jsx'

function App() {
  // Required Features
  // Create a unique theme for events or resources relevant to a specific community
  // Display at least 10 unique resources or events in a responsive card format

  // Lets use https://pokeapi.co/api/v2/pokemon/ as our API
  // well fetch the first 10 pokemon and display them in a card format

  // Create a state variable to hold the pokemon
  const [pokemon, setPokemon] = useState([])
  // Create a state variable to hold the loading state
  const [loading, setLoading] = useState(true)


  // Create a function to fetch the pokemon
  
  useEffect(() => {
  const fetchPokemon = async () => {

    setLoading(true)

    // Create an array to hold the pokemon
    const pokemonArray = []

    // Loop through the first 151 pokemon
    for (let i = 1; i <= 151; i++) {
      // fetch the pokemon
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
      // add the pokemon to the array
      pokemonArray.push(response.data)
    }

    // set the pokemon state variable
    setPokemon(pokemonArray)
    // set the loading state variable
    setLoading(false)
  }

  // call the function
  fetchPokemon()
}, []);

  // Create a function to display the pokemon
  const displayPokemon = () => {
    // if loading is true
    if (loading) {
      // return a loading message
      return <h1>Loading...</h1>
    } else {
      // return the pokemon
      return pokemon.map((poke) => {
        return (
          <Card
            img={poke.sprites.front_default}
            title={poke.name}
            description={poke.types[0].type.name}
            key={poke.id}
            link={"https://www.pokemon.com/es/pokedex/" + poke.name}
          />
        )
      })
    }
  }

  return (
    <div className="App">
      <h1>Pokemon Community Board</h1>
      <div className="cards">{displayPokemon()}</div>
    </div>

  );
}

export default App;