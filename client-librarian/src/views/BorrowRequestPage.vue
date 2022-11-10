<script></script>
<template>
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-center font-bold text-3xl">Categories</h1>
    </div>

    <div>
      <PrimaryButton :primaryButtonName="'New Categories'" @click="$emit('changePage', 'AddCategoryPage')" />
    </div>
  </div>
  <div class="mt-8">
    <!-- table -->
    <table class="min-w-full bg-white">
      <thead class="bg-black text-white">
        <tr>
          <th class="text-center py-3 px-4 uppercase font-semibold text-sm">#</th>
          <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
            Category Name
          </th>
          <th class="text-center py-3 px-2 uppercase font-semibold text-sm">
            Action
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr class="border-b-2 border-slate-400" v-for="(category, index) in categories">
          <td class="text-center py-3 px-4">{{ index + 1 }}</td>
          <td class="text-center py-3 px-4">{{ category.name }}</td>
          <td class="py-3 px-2 text-center">
            <a @click.prevent="$emit(`findCategoryById`, `${category.id}`)" href=""
              class="text-base text-gray-500 hover:underline">Edit</a> |
            <a @click.prevent="$emit(`deleteCategoryById`, `${category.id}`)" href=""
              class="text-base text-red-500 hover:underline">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
tr:nth-child(even) {
  background-color: rgb(226 232 240);
}
</style>