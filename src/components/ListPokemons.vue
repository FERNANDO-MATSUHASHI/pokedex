<script setup>
const pokemon = defineProps(["name", "url"]);
const resultado = pokemon.url.split("/");
const index = resultado[6];

VanillaTilt.init(document.querySelectorAll(".col-3"));
</script>

<template id="form">
  <div class="col-3">
    <div class="card h-100 custom-card">
      <div class="card h-100">
        <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-fluid" alt="Responsive image"/>
      </div>      

      <div class="text-center">
        <h5 class="card-title">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h5>
        <!-- Para abrir em uma aba nova => target="_blank" -->
        <router-link :to="{ name: 'pokemonId', params: { id: index }}" class="btn btn-outline-danger">Detalhes</router-link>
      </div>

    </div>
  </div>
</template>

<style>
  .col-3 {
    margin-bottom: 30px;
  }
  .custom-card {
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(199, 13, 13, 0.712);
  }

  .custom-card .card-header {
    background-color: #007bff;
    color: #fff;
  }
</style>