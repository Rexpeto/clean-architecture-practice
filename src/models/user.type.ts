export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const UserEmptyState: User = {
  id: "",
  name: "",
  email: "",
  password: "",
};

export interface MortyAssociateUrl {
  name: string;
  url: string;
}

export interface ApiMortyState {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: MortyAssociateUrl;
  location: MortyAssociateUrl;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface MortyState {
  id: number;
  name: string;
  status: string;
  species: string;
}

export const EmptyMortyState: MortyState = {
  id: 0,
  name: "",
  status: "",
  species: "",
};
