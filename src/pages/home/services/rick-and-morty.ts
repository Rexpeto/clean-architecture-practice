import axios from "axios";
import { RickAndMortyAdapter } from "../adapter";

export const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/2";

export const fetchRickAndMorty = async (url: string) => {
  return axios(url).then((res) => RickAndMortyAdapter(res.data));
};
