import { useEffect, useState } from 'react';
import { loadCharacters } from '../helpers';

export const useFetchApi = ( url ) => {
  
  const [ characters, setCharacters ] = useState([]);
  const [ info, setInfo ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const getCharacters = async() => {
    const items = await loadCharacters(url);
    const data = items.results.map(result => ({
      id: result.id,
      name: result.name,
      status: result.status,
      species: result.species,
      image: result.image,
      location: result.location.name
    }));

    setCharacters(data);
    setInfo(items.info)
    setTimeout(() => {      
      setIsLoading(false);
    }, 600);
  }

  useEffect(() => {
    getCharacters();
  }, [url])

  return {
    characters,
    info,
    isLoading
  }
}