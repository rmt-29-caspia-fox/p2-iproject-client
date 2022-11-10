<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue"
export default {
  components: { Navbar, Table },
  data() {
    return {
      data: [
        {
          id: "1",
          title: "hello",
          description: "ok ok",
          created_date: "2018-09-09",
        },
        {
          id: "2",
          title: "hello 2",
          description: "ok ok 2",
          created_date: "2018-10-09",
        },
      ],
      columns: ["id", "title", "description", "created_date"],
    };
  },
};
</script>
<template>
  
  <section class="m-w-screen px-32 pt-12">
    <p class="text-2xl font-bold">Statistic</p>
    <!-- statistic cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 p-4 gap-4">
      <div class="flex items-center justify-between py-3 px-5 border-2 border-black font-medium group">
        <div class="text-left">
          <p class="font-light">Categories</p>
          <!-- <p class="text-2xl font-bold">{{ categories.length }}</p> -->
          <p class="text-2xl font-bold">tes</p>
        </div>
      </div>

      <div class="flex items-center justify-between py-3 px-5 border-2 border-black font-medium group">
        <div class="text-left">
          <p class="font-light">Books</p>
          <p class="text-2xl font-bold">tes</p>
        </div>
      </div>

      <div class="flex items-center justify-between py-3 px-5 border-2 border-black font-medium group">
        <div class="text-left">
          <p class="font-light">Borrow Request</p>
          <p class="text-2xl font-bold">tes</p>
        </div>
      </div>

      <div class="flex items-center justify-between py-3 px-5 border-2 border-black font-medium group">
        <div class="text-left">
          <p class="font-light">Approved</p>
          <p class="text-2xl font-bold">tes</p>
        </div>
      </div>

      <div class="flex items-center justify-between py-3 px-5 border-2 border-black font-medium group">
        <div class="text-left">
          <p class="font-light">Book Out</p>
          <p class="text-2xl font-bold">tes</p>
        </div>
      </div>
    </div>
    <p class="text-2xl font-bold mt-8">Logs</p>
    <div>
      <div class="m-4">
        <Table :columns="columns" :items="data" />
      </div>
    </div>
  </section>
</template>
