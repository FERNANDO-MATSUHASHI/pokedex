<script setup>

const pokemon = defineProps(["name", "url"]);
const resulted = pokemon.url.split("/");
const index = resulted[6];

</script>

<template>
  <div class="cards" style="width: 18rem;">
    <div v-if="pokemon.url === 'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id + '/'">
      <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-250" alt="Responsive image" />
      <div class="card-body">
        <h2 class="card-title">{{ pokemon.name }}</h2>

        <p class="card-text">
          <br />
          <br />
          <h5 v-if="this.$route.params.id">Id: {{ this.$route.params.id }}</h5>
          <br />
          <br />
          <h5 v-if="this.abilitys.name">Abilidade: {{ this.abilidade.name }}</h5>
          <br />
          <h5 v-if="this.genders.name">Gênero: {{ this.genero.name }}</h5>
          <br />
          <h5 v-if="this.genders.name">Tipo: {{ this.tipo.name }}</h5>
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

<script>
import axios from 'axios';

export default {
  data() {
    return {
      abilitys: [],
      genders: [],
    };
  },
  mounted() {
    const requests = [
      axios.get('https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id + '/'),
      axios.get('https://pokeapi.co/api/v2/gender/' + this.$route.params.id + '/'),
    ];

    axios.all(requests).then((response) => {
      this.abilitys = response[0].data;
      this.genders = response[1].data;

      this.abilidade = this.abilitys.abilities[0].ability;
      this.genero = this.genders;
      this.tipo = this.abilitys.types[0].type;

      console.log(response[0].data);
    });
  },
};
</script>