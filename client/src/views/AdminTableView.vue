<script>
import { mapActions, mapState } from "pinia";
import Sidebar from "../components/Sidebar.vue";
import { useWaitlistStore } from "../stores/waitinglist";
import Tablebody from "../components/TableBody.vue";

export default {
  components: {
    Sidebar,
    Tablebody,
  },
  created() {
    this.fetchWaitingList("request");
  },
  computed: {
    ...mapState(useWaitlistStore, ["waitlists"]),
  },
  methods: {
    ...mapActions(useWaitlistStore, ["fetchWaitingList"]),
  },
};
</script>

<template>
  <div class="row">
    <div class="col-2">
      <Sidebar />
    </div>
    <div class="col-10">
      <div class="container-fluid mt-2">
        <div class="row-colomn align-items-center">
          <div class="col-12">
            <h1>Waiting Table</h1>
          </div>
          <table class="table table-hover">
            <thead class="bg-light">
              <tr>
                <th>Name and Email</th>
                <th>Car</th>
                <th>Servis</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <Tablebody
                v-for="waitlist in waitlists"
                :key="waitlist.id"
                :waitlist="waitlist"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
