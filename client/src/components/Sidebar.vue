<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/admin/login");
    },
  },
};
</script>

<template>
  
    <nav class="navbar-sidebar bg-linier-1 text-light" id="nav">
      <div class="nav-items">

        <!-- <a class="item-list mb-2">
          <div class="icons me-1">
            <i class="fas fa-clock"></i>
          </div>
          <span></span>
        </a> -->
        <div class="border-bottom border-top">
            <a class="logout" @click.prevent="logout">
              <div class="icons me-1">
                <i class="fas fa-sign-out-alt"></i>
              </div>
              <span class="text-light">Logout</span>
            </a>
        </div>
      </div>
    </nav>
</template>

<style scoped></style>
