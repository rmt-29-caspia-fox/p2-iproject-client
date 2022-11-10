<script>
import { mapActions } from 'pinia';
import { useFavoriteStore } from '../stores/favorite';

export default{
    props: ['hero'],
    methods: {
        ...mapActions(useFavoriteStore, ['addFav'])
    }
}
</script>

<template>
    <div class="col">
        <div class="card" style="height: 500px;">
            <img :src="hero.hero_avatar" class="card-img-top" height="200" style="object-fit: contain ;">
            <hr>
            <div class="card-body">
                <h5 class="card-title" v-text="hero.hero_name" ></h5>
                <p class="card-text">{{hero.hero_role}}</p>
                <p class="catd-text">{{hero.hero_specially}}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary" @click="addFav(hero.hero_id)">Add Favorite</button>
            </div>
        </div>
    </div>
</template>