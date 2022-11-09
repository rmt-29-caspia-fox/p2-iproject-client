<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light bg-linier-1" v-if="$route.path !== '/admin'|| $route.path !=='/admin/login'">
    <div class="container-fluid">
      <a class="navbar-brand text-light">CarWosssh</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end text-center"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active text-light pointer" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light pointer" to="/order">Order Now</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light pointer" to="/waitinglist">WaitingList</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>