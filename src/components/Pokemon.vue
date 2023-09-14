<script setup>

const pokemon = defineProps(["name", "url"]);
const resultado = pokemon.url.split("/");
const index = resultado[6];
</script>

<template>
  <div class="cards" style="width: 18rem;">
    <div v-if="pokemon.url === 'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id + '/'">
      <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-250" alt="Responsive image" />
      <div class="card-body">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <p class="card-text">
          Detalhes....
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  .cards {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  
  .img-250 {
   width: 250px;
}
}
</style>