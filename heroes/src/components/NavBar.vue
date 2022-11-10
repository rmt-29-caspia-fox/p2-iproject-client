<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user';

export default{
    methods: {
        ...mapActions(useUserStore,['logout'])
    },
    computed: {
        ...mapState(useUserStore,['isLogin'])
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style="background-color: black;">
        <div class="container">
            <a class="navbar-brand text-white" href="#">Heroes Legends</a>
            <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="d-flex justify-content-start align-items-center">
                    <i class="fas fa-bars"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link px-3 text-white" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3 text-white" to="/favorites">Favorites</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav flex-row">
                    <li class="nav-item" v-if="!isLogin">
                        <router-link class="nav-link pe-3 text-white" to="/login">
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item" @click.prevent="logout" v-if="isLogin">
                        <a class="nav-link ps-3 text-white" href="#!">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>