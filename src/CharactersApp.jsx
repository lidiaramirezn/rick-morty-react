import React, { useContext } from 'react';
import { Character } from './components';
import { useFetchApi } from './hooks'
import { FormattedMessage } from 'react-intl';
import flagEs from './assets/es.svg';
import flagEn from './assets/en.svg';
import { langContext } from './hooks';

export const CharactersApp = () => {
  
  const { characters, isLoading } = useFetchApi();
  const language = useContext(langContext);

  return (
      <section className="characters">
        <div className="characters__navbar">
          <h2>
            <FormattedMessage id="title" defaultMessage="Personajes"/>
          </h2>
          <div>
            <button 
              className="characters__flag--button" 
              onClick={() => language.setLanguage('es')}>
              <img className="characters__flag" src={flagEs} alt="bandera española" />
            </button>
            <button 
              className="characters__flag--button" 
              onClick={() => language.setLanguage('en')}>
              <img className="characters__flag" src={flagEn} alt="bandera de Estados unidos" />
            </button>
          </div>
        </div>

        <div>
          {
            characters.map(character => 
              <Character key= { character.id } {...character}/>)
          }
        </div>
      </section>    
  )
}
