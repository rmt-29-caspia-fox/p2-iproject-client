<script>
    export default {
        props: ['dataMovie', 'dataUser']
    }
</script>

<template>
    <h1 class="d-flex justify-content-center mb-5">Dashboard</h1>
    <h2 class="d-flex justify-content-center mb-5">Welcome to Dashboard {{dataUser.username}}</h2>
    <div class="d-flex justify-content-center mb-5">
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Movies</h2>
            <h3>{{ dataMovie.countMovies }}</h3>
        </div>
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Genres</h2>
            <h3>{{ dataMovie.countGenres }}</h3>
        </div>
    </div>

    <div class="d-flex justify-content-center mb-5">
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Active Movies</h2>
            <h3>{{ dataMovie.countMoviesActive }}</h3>
        </div>
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Active Genres</h2>
            <h3>{{ dataMovie.countGenresActive }}</h3>
        </div>
    </div>

    <div class="d-flex justify-content-center mb-5">
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Inactive Movies</h2>
            <h3>{{ dataMovie.countMoviesInactive }}</h3>
        </div>
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Inactive Genres</h2>
            <h3>{{ dataMovie.countGenresInactive }}</h3>
        </div>
    </div>

    <div class="d-flex justify-content-center mb-5">
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Archieved Movies</h2>
            <h3>{{ dataMovie.countMoviesArchieved }}</h3>
        </div>
        <div
            class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
            <h2>Total Archieved Genres</h2>
            <h3>{{ dataMovie.countGenresArchieved }}</h3>
        </div>
    </div>
</template>