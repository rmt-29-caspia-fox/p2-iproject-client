<script>
import CardNews from '@/components/CardNews.vue'
import Carousel from '@/components/Carousel.vue'
import {mapState} from 'pinia'
import {useIndexStore} from '@/stores/index'
export default {
  components: {
    CardNews,
    Carousel
  },
  computed: {
    ...mapState(useIndexStore, ['news'])
  }
}
</script>

<template>
  <Carousel/>
  <div class="bg-white py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div class="flex-shrink max-w-full w-full overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-gray-800 text-2xl font-bold">
              <span
                class="inline-block h-5 border-l-3 border-red-600 mr-2"
              ></span
              >News
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
            <!-- card -->
            <CardNews
            v-for="newss in news"
            :newss="newss"
            />
            <!-- end card -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
