<script>
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customer";
import Tablebody from "../components/TableBody.vue";
import socket from "../api/socketio";
import { useAdminStore } from "../stores/admin";

export default {
  components: {
    Tablebody,
  },
  data() {
    return {

    };
  },
  beforeMount() {
    this.fetchWaitingList();
    socket.on("updated-admin", (arg) => {
      this.fetchWaitingList();
    });
  },
  watch: {
    waitlists(newData, oldData) {
      if (newData.length !== oldData.length) {
        this.fetchWaitingList();
      }
    },
  },
  computed: {
    ...mapState(useAdminStore, ["waitlistsAdmin"]),
    ...mapState(useCustomerStore, ["waitlists"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchWaitingList"]),
  },
};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center content"
    id="table-book"
  >
    <div class="box bg-linier-2 p-4">
      <div class="container-fluid">
        <h1 class="text-light mb-4">Book Order</h1>
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
</template>
