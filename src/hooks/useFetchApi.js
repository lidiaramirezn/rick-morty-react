import { useEffect, useState } from 'react';
import { loadCharacters } from '../helpers';

export const useFetchApi = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async() => {
    const items = await loadCharacters();
    setCharacters(items);
    setIsLoading(false);
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return {
    characters,
    isLoading
  }
}