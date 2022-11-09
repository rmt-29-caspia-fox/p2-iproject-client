<script></script>

<template>
  <div class="container">
    <div
      class="row gy-4"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 15%;
        margin-bottom: 3%;
      "
    >
      <div class="col text-center">
        <img
          src="../assets/Sorry.png"
          alt="Sorry page not found"
          style="width: 15%"
        />
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h1>Oops! Are you lost?</h1>
        <h5>Let's get back and continue browsing</h5>
        <router-link
          to="/"
          class="btn btn-lazpiz text-center"
          style="width: 10%"
          >Back to Home</router-link
        >
      </div>
    </div>
  </div>
</template>
