<script setup>
const pokemon = defineProps(["name", "url"])

</script>

<template>
    <div class="col-4">
        <div class="card mb-3">
            <!-- <p class="text-center">{{ pokemon.name }}</p> -->
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">{{ pokemon.name }}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Informações</a>
            </div>
</div>
        </div>
    </div>

</template>

<style>

</style>