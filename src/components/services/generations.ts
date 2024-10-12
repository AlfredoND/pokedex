// Fetch the Pokémon data for the specified generation from the PokeAPI
async function fetchPokemons(url: RequestInfo | URL) {
  let data: { pokemon_species: any };
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data.pokemon_species;
}

//Order the pokemons
function orderPokemons(string: string) {
  let order = string.substring(
    string.lastIndexOf("s/") + 2,
    string.lastIndexOf("/")
  );
  return order;
}

//get pokemons
export let pokeIDs = [];
export async function getPokemon(generation: number) {
  const URL_GENERATION = `https://pokeapi.co/api/v2/generation/${generation}/`;

  let pokemons = [];
  pokemons = await fetchPokemons(URL_GENERATION);
  for (let j = 0; j < pokemons.length; j++) {
    pokemons[j].id = orderPokemons(pokemons[j].url);
  }
  pokemons.sort((a, b) => a.id - b.id);
  pokemons.forEach((pokemon) => pokeIDs.push(pokemon.id));
  console.log(pokemons);
}
