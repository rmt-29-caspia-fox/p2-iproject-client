<script>

export default {
  props: ['table']
}
</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{table.Country}}
    </th>
    <td class="py-4 px-6">{{table.NewConfirmed}}</td>
    <td class="py-4 px-6">{{table.TotalConfirmed}}</td>
    <td class="py-4 px-6">{{table.TotalRecovered}}</td>
    <td class="py-4 px-6">{{table.TotalDeaths}}</td>
  </tr>
</template>
