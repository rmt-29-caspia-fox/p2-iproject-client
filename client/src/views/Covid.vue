<script>
import TableCovid from "@/components/TableCovid.vue";
import { mapState } from "pinia";
import { useIndexStore } from "@/stores/index";
import moment from 'moment'
export default {
  components: {
    TableCovid,
  },
  computed: {
    ...mapState(useIndexStore, ["tables"]),

  },
  methods: {
    format(data) {
      return moment(data).format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  }
};
</script>

<template>
  <section>
    <div class="bg-white py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold mt-10">
                <span
                  class="inline-block h-5 border-l-3 border-red-600 mr-2"
                ></span>
                COVID-19 DATA FOR EACH COUNTRY
              </h2>
            </div>
            <h1 class="text-sm text-red-500 font-bold">*Updated: {{format(tables.Date)}}</h1>
            <div class="overflow-x-auto relative">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Region</th>
                    <th scope="col" class="py-3 px-6">New Cases</th>
                    <th scope="col" class="py-3 px-6">Total Confirmed</th>
                    <th scope="col" class="py-3 px-6">Total Recovered</th>
                    <th scope="col" class="py-3 px-6">Total Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                     Global
                    </th>
                    <td class="py-4 px-6">{{tables.Global.NewConfirmed}}</td>
                    <td class="py-4 px-6">{{tables.Global.TotalConfirmed}}</td>
                    <td class="py-4 px-6">{{tables.Global.TotalRecovered}}</td>
                    <td class="py-4 px-6">{{tables.Global.TotalDeaths}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-8 overflow-x-auto relative">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Countries</th>
                    <th scope="col" class="py-3 px-6">New Cases</th>
                    <th scope="col" class="py-3 px-6">Total Confirmed</th>
                    <th scope="col" class="py-3 px-6">Total Recovered</th>
                    <th scope="col" class="py-3 px-6">Total Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  <TableCovid
                  v-for="table in tables.Countries"
                  :table="table"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
