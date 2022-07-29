const { loadCharacters } = require("../helpers")

describe('Test to loadCharacters()', () => {
  test('Should be character array', async()=> {
    const characters = await loadCharacters();
    expect(characters.length).toBeGreaterThan(0);
  })
})