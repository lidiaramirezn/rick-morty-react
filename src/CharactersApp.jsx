import React from 'react';
import { Character } from './components';
import { useFetchApi } from './hooks'

export const CharactersApp = () => {
  
  const { characters, isLoading } = useFetchApi();

  if(characters) {
    console.log('characters', characters)
  }

  return (
    <div className="">
      {
        characters.map(character => 
          <Character key= { character.id } {...character}/>)
      }
      
    </div>
  )
}
