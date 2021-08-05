import type { AllCharactersFromApi, Character } from '../types';

export async function getCharacter(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromApi = await response.json();
  const characters = data.results;
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      location: character.location.name,
      name: character.name,
      origin: character.origin.name,
      species: character.species,
      status: character.status,
      thumbnail: character.image,
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
