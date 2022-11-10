<script>
export default {
  props: ["newss"],
  methods: {
    navigate(page) {},
  },
};
</script>

<template>
  <div
    class="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
  >
    <div class="flex flex-row sm:block hover-img">
      <img
        class="max-w-full w-full mx-auto"
        :src="newss.urlToImage"
        alt="Image"
      />
      <div class="py-0 sm:py-3 pl-3 sm:pl-0">
        <h3 class="text-lg font-bold leading-tight mb-2">
          {{ newss.title }}
        </h3>
        <p class="hidden md:block text-gray-600 leading-tight mb-1">
          {{ newss.description }}
          <span class="text-red-400"
            ><button><a :href="newss.url" target="_blank">More...</a></button></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
