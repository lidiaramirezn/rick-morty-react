const { render, screen } = require("@testing-library/react");
const { Character } = require("../components");

describe('Test to <Character/>', () => {
  const name = 'Rick Sanchez';
  const url = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

  test('Should be show name', () => {
    render(<Character name={ name } image={ url }/>);
    expect(screen.getByText(name)).not.toBeNull();
    expect(screen.getByText(name)).toBeTruthy()
  });

  test('Should be show image with indicate URL', () => {
        
    render( <Character image={ url } name={ name } /> );
    const { src } = screen.getByRole('img');
    expect( src ).toBe( url );
  });
})