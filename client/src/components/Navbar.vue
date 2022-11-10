<template>
  <nav class="navbar navbar-expand-md navbar-custom bg-light sticky-top">
    <div class="container-fluid mt-6">
      <router-link class="nav-link active" to="/"><a class="navbar-brand" href="#">FREEBOOK</a></router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/favourites">Favourite</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" @click.prevent="logout">Log Out</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="query"
          />
          <button class="btn btn-outline-success" @click.prevent="emitSrc">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["searchG","logout"]),
    emitSrc() {
      this.searchG(this.query);
    },
  },
};
</script>

<style scoped>
.navbar-custom {
  background-color: lightcoral;
}
</style>
