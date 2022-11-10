<script>
import { mapActions, mapState } from "pinia";
import socket from "../api/socketio";
import Sidebar from "../components/Sidebar.vue";
import Tablebody from "../components/TableBody.vue";
import { useAdminStore } from "../stores/admin";

export default {
  components: {
    Sidebar,
    Tablebody,
  },
  data() {
    return {
      searchStatus: "request",
    };
  },
  beforeMount() {
    socket.on("registered-customer", () => {
      this.fetchWaitingListAdmin("request");
    });
  },
  created() {
    this.fetchWaitingListAdmin(this.searchStatus);
  },
  watch: {
    searchStatus() {
      this.fetchWaitingListAdmin(this.searchStatus);
    },
  },
  computed: {
    ...mapState(useAdminStore, ["waitlistsAdmin"]),
  },
  methods: {
    ...mapActions(useAdminStore, ["fetchWaitingListAdmin"]),
    searchByStatus(value) {
      this.searchStatus = value;
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-2">
      <Sidebar @searchStatus="searchByStatus" />
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
                v-if="waitlistsAdmin"
                v-for="waitlist in waitlistsAdmin"
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
