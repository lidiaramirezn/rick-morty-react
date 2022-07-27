import React from 'react';
import { Character } from './components';
import { useFetchApi } from './hooks'

export const CharactersApp = () => {
  
  const { characters, isLoading } = useFetchApi();

  if(characters) {
    console.log('characters', characters)
  }

  return (
    <section className="characters">
      <h2>Personajes de Rick and Morty</h2>
      <div>
        {
          characters.map(character => 
            <Character key= { character.id } {...character}/>)
        }        
      </div>
    </section>    
  )
}
