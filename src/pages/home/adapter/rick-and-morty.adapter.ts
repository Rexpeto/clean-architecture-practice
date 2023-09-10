import { ApiMortyState, MortyState } from "@/models";

export const RickAndMortyAdapter = (user: ApiMortyState): MortyState => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
  };
};
