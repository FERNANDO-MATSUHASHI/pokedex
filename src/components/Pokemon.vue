<script setup>

const pokemon = defineProps(["name", "url"]);
const resulted = pokemon.url.split("/");
const index = resulted[6];

</script>

<template>
  <div class="cards h-100 custom-card" style="width: 18rem;"  v-if="pokemon.url === 'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id + '/'">
    <div>
      <br>
      <h2 class="card-title">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h2>
      <br>
      <img :src="`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`" class="img-250" alt="Responsive image" />
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-if="this.$route.params.id">Id: {{ this.$route.params.id }}</li>
          <li class="list-group-item" v-if="this.abilitys.name">Habilidade: {{ this.abilidade.name }}</li>
          <li class="list-group-item" v-if="this.abilitys.name">Espécie: {{ this.especie.name }}</li>
          <li class="list-group-item" v-if="this.abilitys.name">Tipo: {{ this.tipo.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  .cards {
    border-top: 100px;
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
    margin-top: 150px;
  }

  .img-250 {
    width: 250px;
  }

  .card-body {
    font-size: 20px;
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
      //axios.get('https://pokeapi.co/api/v2/gender/' + this.$route.params.id + '/'),
    ];

    axios.all(requests).then((response) => {
      this.abilitys = response[0].data;
      //this.genders = response[1].data;

      this.abilidade = this.abilitys.abilities[0].ability;
      this.especie = this.abilitys.species;
      this.tipo = this.abilitys.types[0].type;

      //console.log(response[0].data);
      // console.log(this.especie);
    });
  },
};
</script>