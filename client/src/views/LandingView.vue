<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {},
};
</script>

<template>
  <div class="d-flex align-items-center justify-content-center content">
    <div class="card mb-3 shadow bg-linier-1">
      <div class="row g-0 inside-card p-3">
        <div class="col-md-4 col-12">
          <img
            src="https://portagecarwashin.com/wp-content/uploads/sites/799/2018/05/bg.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8 col-12 text-light">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 8rem">
              <strong>Welcome</strong>
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text"><RouterLink class="link pointer" to="/map"> click Here </RouterLink> to location</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
