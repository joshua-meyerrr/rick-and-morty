export type Character = {
  name: string;
  thumbnail: string;
  status: string;
  species: string;
  location: string;
  origin: string;
};

export type CharacterFromApi = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type AllCharactersFromApi = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterFromApi[];
};
