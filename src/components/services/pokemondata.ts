import { pokeIDs } from "./generations";


  for (let i = 1; i <= pokeIDs[pokeIDs.length - 1]; i++) {
    const URL_DATA_POKEMON = `https://pokeapi.co/api/v2/pokemon/${i}`;
    await fetch(URL_DATA_POKEMON)
      .then((response) => response.json())
      .then((data) => pokemon(data));
  }

export function pokemon(pokemon: { id: any; name: any; height: any; weight: any; sprites: any; }) {
    const { id, name, height, weight, sprites } = pokemon;
    const spritesHome = sprites.other.home.front_default;
     
    return pokemon
  }

