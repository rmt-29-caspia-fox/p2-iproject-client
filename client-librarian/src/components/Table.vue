<script>
export default {
  props: ["columns", "items", "actions"],
};
</script>
<template>
  <table class="min-w-full bg-white">
    <thead class="bg-black text-white">
      <tr>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm" v-for="(column, index) in columns" :key="index">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody class="text-gray-700">
      <tr class="border-b-2 border-slate-400" v-for="(item, index) in items" :key="index">
        <td class="text-left py-3 px-4" v-for="(column, indexColumn) in columns" :key="indexColumn">
          {{ item[column] }}
        </td>
        <td>
          
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
tr:nth-child(even) {
  background-color: rgb(226 232 240);
}
</style>
