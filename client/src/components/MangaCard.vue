<script>
export default {
  props: ["manga"],
};
</script>

<template>
  <div class="col-3-sm-6 mb-3 mr-3">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        :src="manga.attributes.posterImage.small"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-text">
          {{ manga.attributes.titles.en }}
        </h5>
        <h6 class="card-text">Rating: {{ manga.attributes.averageRating }}</h6>
        <RouterLink :to="`/manga/${manga.id}`" class="btn btn-warning"
          >Details</RouterLink
        >
      </div>
    </div>
  </div>
</template>
