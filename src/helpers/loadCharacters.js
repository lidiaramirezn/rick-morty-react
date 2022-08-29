export const loadCharacters = async(url) => {
  const urlAPI = url ? url : `https://rickandmortyapi.com/api/character`;

  const response = await fetch(urlAPI);
  const data = await response.json();

  return data;
}