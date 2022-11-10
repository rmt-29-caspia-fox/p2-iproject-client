<script>

export default {
  props: ['table'],
  methods: {
    number(data) {
      return new Intl.NumberFormat().format(data)
    }
  }
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
    <td class="py-4 px-6">{{number(table.NewConfirmed)}}</td>
    <td class="py-4 px-6">{{number(table.TotalConfirmed)}}</td>
    <td class="py-4 px-6">{{number(table.TotalRecovered)}}</td>
    <td class="py-4 px-6">{{number(table.TotalDeaths)}}</td>
  </tr>
</template>
