import {
  getPokemon,
  getPokemonsByTypePaginated,
} from "@/actions/pokemons.action";
import { describe, it, expect } from "vitest";

describe("getPokemon Server Action", () => {
  it("should fetch and correctly transform the pokemon data on success", async () => {
    const pokemon = await getPokemon();

    expect(pokemon).toHaveLength(2);

    expect(pokemon[0]).toEqual({
      id: 1,
      name: "Bulbasaur",
      image: "https://example.com/bulbasaur.png",
      types: ["grass", "poison"],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        spAtk: 65,
        spDef: 65,
        speed: 45,
      },
    });
  });

  it("should fetch and correctly transform the pokemon data by type", async () => {
    const pokemon = await getPokemonsByTypePaginated("grass");

    expect(pokemon).toHaveLength(2);

    expect(pokemon[0]).toEqual({
      name: "Bulbasaur",
      image: "https://example.com/bulbasaur.png",
      types: ["grass", "poison"],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        spAtk: 65,
        spDef: 65,
        speed: 45,
      },
    });
    expect(pokemon[1]).toEqual({
      id: 2,
      name: "Ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      types: ["grass", "poison"],
      stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        spAtk: 80,
        spDef: 80,
        speed: 60,
      },
    });
  });
});
