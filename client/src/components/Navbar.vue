<script></script>

<template>
  <nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href=""
      ><img src="../assets/Iveawhite.png" alt="" width="100"
    /></a>
    <button
      class="navbar-toggler navbar-dark"
      type="button"
      data-toggle="collapse"
      data-target="#main-navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- menu tengah -->
    <div class="collapse navbar-collapse" id="main-navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/bookmarks" class="nav-link">Bookmarks</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/register" class="nav-link">Register</RouterLink>
        </li>
      </ul>
    </div>
    <!-- menu kanan -->
    <div class="collapse navbar-collapse" id="main-navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button
            v-if="isLogin"
            type="button"
            class="btn btn-outline-warning"
            @click.prevent="handleLogout"
          >
            Logout
          </button>
          <!-- <a class="nav-link" href="#" @click.prevent="logout">Logout</a> -->
        </li>
      </ul>
    </div>
  </nav>
</template>
