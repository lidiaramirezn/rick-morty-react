export const loadCharacters = async() => {
  const urlAPI = `https://rickandmortyapi.com/api/character`;

  const response = await fetch(urlAPI);
  const { info, results } = await response.json();

  console.log('info', info)
  console.log('data', results)

  const data = results.map(result => ({
    id: result.id,
    name: result.name,
    status: result.status,
    species: result.species,
    image: result.image
  }))

  return data;
}