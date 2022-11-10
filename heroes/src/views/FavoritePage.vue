<script>
import CardFav from '../components/CardFav.vue'
import { mapState, mapActions } from 'pinia';
import { useFavoriteStore } from '../stores/favorite';

export default{
    components: {
        CardFav
    },
    computed: {
        ...mapState(useFavoriteStore, ['favorites'])
    },
    methods: {
        ...mapActions(useFavoriteStore, ['fetchFav'])
    },
    created(){
        this.fetchFav()
    }
}
</script>

<template>
    <section class="container margin-navbar">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="text-center">
                        <h3>Favorite Hero</h3>
                    </div>
                </form>
            </div>
        </div>

        <!-- Card -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <CardFav v-for="fav in favorites" :key="fav.id" :fav="fav" />
        </div>
    </section>
</template>