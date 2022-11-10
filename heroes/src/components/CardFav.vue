<script>
import { mapActions } from 'pinia';
import { useFavoriteStore } from '../stores/favorite';

export default{
    props: ['fav'],
    methods: {
        ...mapActions(useFavoriteStore, ['deleteFav'])
    }
}
</script>

<template>
    <div class="col">
                <div class="card">
                    <img :src="fav.hero[0].hero_avatar" class="card-img-top"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{fav.hero[0].hero_name}}</h5>
                        <hr>
                        <p>Overview :</p>
                        <p class="card-text">Durability: {{fav.hero[0].hero_overview.hero_durability}}</p>
                        <p class="card-text">Offence: {{fav.hero[0].hero_overview.hero_offence}}</p>
                        <p class="card-text">Ability: {{fav.hero[0].hero_overview.hero_ability}}</p>
                        <p class="card-text">Difficulty: {{fav.hero[0].hero_overview.hero_difficulty}}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-danger" @click="deleteFav(fav.id)">Delete</button>
                    </div>
                </div>
            </div>
</template>