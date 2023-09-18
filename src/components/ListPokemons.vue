<script setup>
import { VueElement } from 'vue';
import Pokemon from '../components/Pokemon.vue';

const pokemon = defineProps(["name", "url"]);
const resultado = pokemon.url.split("/");
const index = resultado[6];
</script>

<template id="form">
  <div class="col-3">
    <div class="card h-100">
      <div class="card h-100">
        <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-fluid" alt="Responsive image"/>
      </div>      

      <div class="text-center">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <!-- Para abrir em uma aba nova => target="_blank" -->
        <router-link :to="{ name: 'pokemonId', params: { id: index }}" class="btn btn-primary">Detalhes</router-link>
      </div>

    </div>
  </div>
</template>