<script>
// export default {
//   props: ["byName", "byCategory", "byMaxPrice", "byMinPrice", "categories"],
//   emits: [
//     "update:byName",
//     "update:byCategory",
//     "update:byMaxPrice",
//     "update:byMinPrice",
//     "filterProducts"
//   ],
// };
</script>
<template>
  <div class="w-1/6" style="border-right: solid black 0.75px">
      <h2 class="font-bold text-2xl mt-4">Library</h2>
      <div class="mt-2 pl-4">
        <a @click.prevent="$emit('changePage', 'DashboardPage')" href="" :class="page === 'DashboardPage' ? 'text-xl text-gray-500 hover:underline font-bold' : 'text-xl text-gray-500 hover:underline'">Dashboard</a>
      </div>
      <h2 class="font-bold text-2xl mt-8">Collection</h2>
      <div class="mt-2 pl-4">
        <a @click.prevent="$emit('changePage', 'DashboardPage')" href="" :class="page === 'DashboardPage' ? 'text-xl text-gray-500 hover:underline font-bold' : 'text-xl text-gray-500 hover:underline'">My Books</a>
      </div>
      <div class="pl-4">
        <a @click.prevent="$emit('changePage', 'DashboardPage')" href="" :class="page === 'DashboardPage' ? 'text-xl text-gray-500 hover:underline font-bold' : 'text-xl text-gray-500 hover:underline'">Add Book</a>
      </div>
      <div class="pl-4">
        <a @click.prevent="$emit('changePage', 'DashboardPage')" href="" :class="page === 'DashboardPage' ? 'text-xl text-gray-500 hover:underline font-bold' : 'text-xl text-gray-500 hover:underline'">Add Category</a>
      </div>
  </div>
</template>
