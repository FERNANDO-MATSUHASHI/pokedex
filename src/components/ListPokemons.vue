<script setup>
const pokemon = defineProps(["name", "url"]);
const resultado = pokemon.url.split("/");
const index = resultado[6];
</script>

<template>
  <div class="col-4">
    <div class="card h-100">

      <div class="card h-100">
        <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-fluid" alt="Responsive image"/>
      </div>      

      <div class="text-center">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <!-- <a :href="pokemon.url" target="_blank" class="btn btn-primary">Detalhes</a> -->
        <a :href="pokemon.url" target="_blank" class="btn btn-primary">Detalhes</a>
      </div>

    </div>
  </div>
</template>

<style>
</style>



