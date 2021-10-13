import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import RandomPokemon from "@/components/RandomPokemon.vue";
import SelectedPokemon from "@/components/SelectedPokemon.vue";
import App from "@/App.vue";
import { Pokemon } from "@/types";

describe("Pokemon tests", () => {
  it("creates a random number between 1 and 151", () => {
    const wrapper = shallowMount(App);
    const vm: any = wrapper.vm;
    const num = vm.randomNumber();
    expect(num).within(1, 151);
  });
  it("updates the selected pokemon details with the pokemon data", () => {
    const pokemon = new Pokemon();
    pokemon.name = "Pikachu";
    pokemon.attack = 54;
    pokemon.defense = 77;
    pokemon.hitPoints = 99;
    pokemon.id = 100;
    pokemon.specialAttack = 40;
    pokemon.specialDefense = 30;
    pokemon.speed = 90;
    pokemon.sprite = "example";
    pokemon.weight = 77;

    const wrapper = mount(App);
    const selectedPokemonWrapper = wrapper.find(SelectedPokemon);
    const vm: any = wrapper.vm;
    vm.selectPokemon(pokemon);

    const vm2: any = selectedPokemonWrapper.vm;
    const selectedPokemonData = vm2.pokemon;

    const h1 = selectedPokemonWrapper.find("h1");
    const hitPoints = selectedPokemonWrapper.find("#hitPoints");

    expect(h1.text()).equals("Pikachu");
    expect(hitPoints.text()).equals("Hit Points: 99");
    expect(selectedPokemonData.weight).equals(77);
  });
  it("updates the selected pokenmon screen when a pokemon is selecetd from random pokeon list", () => {
    // to run this test, the local storage references must be removed from App.vue
    const pokemon = new Pokemon();
    pokemon.name = "Pikachu";
    pokemon.attack = 54;
    pokemon.defense = 77;
    pokemon.hitPoints = 99;
    pokemon.id = 100;
    pokemon.specialAttack = 40;
    pokemon.specialDefense = 30;
    pokemon.speed = 90;
    pokemon.sprite = "example";
    pokemon.weight = 77;

    const wrapper = mount(App);
    const randomPokemonWrapper = wrapper.find(RandomPokemon);
    randomPokemonWrapper.setData({ pokemon });
    const selectedPokemonWrapper = wrapper.find(SelectedPokemon);
    const vm: any = randomPokemonWrapper.vm;
    vm.selectPokemon();

    const vm2: any = selectedPokemonWrapper.vm;
    const selectedPokemonData = vm2.pokemon;

    const h1 = selectedPokemonWrapper.find("h1");
    const hitPoints = selectedPokemonWrapper.find("#hitPoints");

    expect(h1.text()).equals("Pikachu");
    expect(hitPoints.text()).equals("Hit Points: 99");
    expect(selectedPokemonData.weight).equals(77);
  });
});
