export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: PokemonStats;
};

export type PokemonListResult = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
};

export type PokemonTypeResult = {
  name: string;
  url: string;
};

export type PokemonTypeResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonTypeResult[];
};

export type PokemonDetailType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonDetailStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetailSprites = {
  front_default: string | null;
  other: {
    "official-artwork": {
      front_default: string | null;
    };
  };
};

export type PokemonDetailResponse = {
  id: number;
  name: string;
  sprites: PokemonDetailSprites;
  types: PokemonDetailType[];
  stats: PokemonDetailStat[];
};

export type TypePokemonEntry = {
  is_main_series: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
};

export type TypeDetailResponse = {
  id: number;
  name: string;
  pokemon: TypePokemonEntry[];
};
