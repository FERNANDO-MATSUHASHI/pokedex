import axios from 'axios';

const api = axios.create ({
    baseAbilityURL: 'https://pokeapi.co/api/v2/ability/',
    baseGenderURL: 'https://pokeapi.co/api/v2/gender/'
});

export default api;