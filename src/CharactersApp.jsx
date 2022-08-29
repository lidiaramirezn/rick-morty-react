import React, { useContext, useState } from 'react';
import { useFetchApi } from './hooks'
import { Character, Loader, Navbar, Pagination } from './components';

export const CharactersApp = () => {
  
  const [ url, setUrl ] = useState('');
  const [ current, setCurrent] = useState(1);
  const { characters, info, isLoading } = useFetchApi(url);

  const handleNextPage = () => {
    setUrl(info.next);
    setCurrent(current + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    setUrl(info.prev)
    setCurrent(current - 1)
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      { isLoading ? 
          <Loader /> : 
          <main className="characters">          
            <Navbar />
            <Pagination 
              pages = { info.pages } 
              currentPage = { current }
              onPreviousPage = {handlePreviousPage} 
              onNextPage = { handleNextPage } 
            />
            <section className="characters__cards">
            {
              characters.map(character => 
                <Character key= { character.id } {...character}/>)
            }
            </section>
            <Pagination 
              info = { info } 
              currentPage = { current }
              onPreviousPage = {handlePreviousPage} 
              onNextPage = { handleNextPage } 
            />
          </main> 
      }
    </>
  )
}
