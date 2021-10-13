<template>
  <div class="app">
    <ul class="list" style="flex-grow: 4">
      <random-pokemon
        v-for="(pokemon, index) in randomPokemons"
        :key="index"
        @selectedPokemon="selectPokemon($event)"
      ></random-pokemon>
    </ul>
    <selected-pokemon
      class="selection"
      style="flex-grow: 6"
      :pokemon="selectedPokemon"
    ></selected-pokemon>
    <!-- TASK 1 - button to select random pokemon
    <button @click="generatePokemon()">Generate Pokemon</button>-->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Pokemon } from "./types";
import RandomPokemon from "./components/RandomPokemon.vue";
import SelectedPokemon from "./components/SelectedPokemon.vue";
import { PokemonAPI } from "./httpService";
import axios from "axios";
@Component({ components: { RandomPokemon, SelectedPokemon } })
export default class PokemonApp extends Vue {
  private selectedPokemon = new Pokemon();
  private randomPokemons: Pokemon[] = new Array(10);
  private async mounted() {
    const stuff = await axios.get(
      "http://localhost:7777/store/mulberry-coffee"
    );
    if (typeof localStorage !== "undefined") {
      const storagePokemon = localStorage.getItem("pokemon");
      this.selectedPokemon =
        storagePokemon !== null ? JSON.parse(storagePokemon) : new Pokemon();
    }
  }
  private selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("pokemon", JSON.stringify(pokemon));
    }
  }

  // TASK 1 functions
  private randomNumber() {
    return Math.floor(Math.random() * 151) + 1;
  }
  private async generatePokemon() {
    const randomNumber = this.randomNumber();
    this.selectedPokemon = await PokemonAPI.getPokemon(randomNumber);
  }
}
</script>


<style>
.app {
  display: flex;
  align-items: stretch;
}
.list {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
.selection {
  background-color: orange;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
li {
  list-style-type: none;
}
</style>
