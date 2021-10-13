<template>
  <h1 v-if="!pokemon.name">Please Select a Pokemon</h1>
  <div v-else>
    <div style="flex-box">
      <h1>{{pokemon.name}}</h1>
      <img :src="pokemon.sprite" :alt="pokemon.name" />
    </div>
    <ul>
      <li>Speed: {{pokemon.speed}}</li>
      <li>Weight: {{pokemon.weight}}</li>
      <li>Defense: {{pokemon.defense}}/ Special: {{pokemon.specialDefense}}</li>
      <li>Attack: {{pokemon.attack}}/ Special: {{pokemon.specialAttack}}</li>
      <li id="hitPoints">Hit Points: {{pokemon.hitPoints}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "../types";

@Component
export default class SelectedPokemon extends Vue {
  @Prop() private pokemon!: Pokemon;
}
</script>

<style scoped>
.pokemon-name {
  border-radius: 25px;
  position: relative;

  background: orangered;
  border: 2px solid black;
  padding: 10pxx;
}
</style>