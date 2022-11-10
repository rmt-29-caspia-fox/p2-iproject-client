<script>
export default {
  props: ["bookmark"],
  computed: {
    parsed() {
      const obj = JSON.parse(this.bookmark.dataManga);
      return obj.data;
    },
  },
};
</script>

<template>
  <div class="col-3-sm-6 mb-3 mr-3">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        :src="parsed.attributes.posterImage.small"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-text">{{ parsed.attributes.titles.en }}</h5>
        <h5 v-if="!parsed.attributes.titles.en" class="card-text">
          {{ parsed.attributes.titles.en_us }}
        </h5>
        <h6 class="card-text">Rating: {{ parsed.attributes.averageRating }}</h6>
        <RouterLink :to="`/manga/${parsed.id}`" class="btn btn-warning"
          >Details</RouterLink
        >
      </div>
    </div>
  </div>
</template>
