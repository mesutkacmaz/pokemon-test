import { http, HttpResponse } from "msw";
import {
  mockBulbasaurDetails,
  mockPokemonList,
  mockTypeGrassResponse,
} from "./mock.data";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () =>
    HttpResponse.json(mockPokemonList),
  ),
  http.get("https://pokeapi.co/api/v2/pokemon/1", () =>
    HttpResponse.json(mockBulbasaurDetails),
  ),
  http.get("https://pokeapi.co/api/v2/type/:type", () =>
    HttpResponse.json(mockTypeGrassResponse),
  ),
];
