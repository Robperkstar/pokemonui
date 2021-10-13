import Axios from "axios";
import { Pokemon } from "./types";

export class PokemonAPI {
  public static pokemonAxios = Axios.create();
  public static async getPokemon(id: number): Promise<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await this.pokemonAxios.get(url);
    const pokemon = new Pokemon();
    pokemon.name = response.data.name;
    pokemon.weight = response.data.weight;
    pokemon.speed = response.data.stats[0].base_stat;
    pokemon.specialDefense = response.data.stats[1].base_stat;
    pokemon.specialAttack = response.data.stats[2].base_stat;
    pokemon.defense = response.data.stats[3].base_stat;
    pokemon.attack = response.data.stats[4].base_stat;
    pokemon.hitPoints = response.data.stats[5].base_stat;
    pokemon.sprite = response.data.sprites.front_default;
    return pokemon;
  }
}
