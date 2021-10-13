<template>
  <li>
    <div class="single-pokemon" @click="selectPokemon()">{{pokemon.name}}</div>
  </li>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "../types";
import axios from "axios";
import { PokemonAPI } from "../httpService";
@Component
export default class RandomPokemon extends Vue {
  private pokemon = new Pokemon();

  private randomNumber() {
    return Math.floor(Math.random() * 151) + 1;
  }

  private async mounted() {
    const randomNumber = this.randomNumber();
    this.pokemon = await PokemonAPI.getPokemon(randomNumber);
  }

  private selectPokemon() {
    this.$emit("selectedPokemon", this.pokemon);
  }
}
</script>

<style scoped>
.single-pokemon {
  border-radius: 25px;
  background: blue;
  border: 2px solid black;
  padding: 10pxx;
  margin: 10px;
}
.single-pokemon:hover {
  background: lightblue;
  cursor: pointer;
}
</style>