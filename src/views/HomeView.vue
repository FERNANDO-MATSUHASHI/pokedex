<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListPokemons from '../components/ListPokemons.vue';

let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
  .then(response => response.json())
  .then(response => {
    pokemons.value = response.results;
  })
})
</script>

<template>
  <main>
    <div class="card">
      <div class="direita">
        <input v-model="searchText" type="text">
        <button @click="search">Pesquisar</button>
        <p>{{ error }}</p> <!-- Exibe o valor da variável -->
      </div>
      
    <div class="container">
      <div class="row mt-4">
        <div>
          <div class="card">
            <div class="card-body row">
              <ListPokemons 
              v-for="pokemon in pokemons"
              :key="pokemon.name"
              :name="pokemon.name"
              :url="pokemon.url"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  </main>
</template>

<style>
.container {
  margin-top: 0%;
}
</style>


<script>
  export default {
    data() {
      return {
        searchText: '',
        error: ''
      }
    },
    methods: {
      search() {
        this.error = '' // Limpa o campo de erro

        if (!this.searchText) {
          this.error = 'O campo está vazio'
        }
      }
    },
  }
</script>