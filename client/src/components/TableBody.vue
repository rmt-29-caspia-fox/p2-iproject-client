<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import Swal from "sweetalert2";
import socket from "../api/socketio";
import { useAdminStore } from "../stores/admin";
import { useCustomerStore } from "../stores/customer";
import moment from "moment";

export default {
  props: ["waitlist"],
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useAdminStore, ["state"]),
    ...mapState(useAdminStore, ["coords"]),
    getRelativeTime() {
      return moment(this.waitlist.updatedAt, "YYYYMMDD").locale('id').fromNow();
    },
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchWaitingList"]),
    ...mapActions(useAdminStore, [
      "fetchWaitingListAdmin",
      "patchWaitlist",
      "handlerMail",
      "getWaitlist",
    ]),
    async handlerPatchWaitlist(status, id) {
      try {
        this.state = "request";
        await this.patchWaitlist(status, id);
        const { data } = await this.getWaitlist(id);
        let text;
        const payload = `${data.Customer.latitude},${data.Customer.longitude}`;
        if (status !== "request" || this.waitlist.status != 'request') {
          await this.handlerMail({
            email: data.Customer.email,
            coordinate: payload,
          });
          text = "Email has been send";
        }
        await this.fetchWaitingListAdmin("request");

        socket.emit("update-patch", { update: true });
        Swal.fire({
          icon: "success",
          title: "data has change!",
          text: text ? text : "",
          timer: 2000,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },
  },
};
</script>

<template>
  <tr>
    <td>
      <div class="d-flex align-items-center">
        <div class="ms-3">
          <p class="fw-bold mb-1" v-if="waitlist.Customer">
            {{ waitlist.Customer.name }}
          </p>
          <p class="text-muted mb-0" v-if="waitlist.Customer">
            {{ waitlist.Customer.email }}
          </p>
        </div>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center">
        <div class="ms-3">
          <p class="fw-bold mb-1">{{ waitlist.name }}</p>
          <p class="text-muted mb-0">{{ waitlist.brand }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center" style="height: 40px">
        <p class="fw-bold mb-1">{{ waitlist.service }}</p>
      </div>
    </td>
    <td>
      <div
        class="d-flex align-items-center"
        v-if="this.$route.name === 'waitinglist'"
      >
        <div class="ms-3">
          <p class="fw-bold mb-1">
            {{ waitlist.status }}
          </p>
          <p class="mb-1">
            {{ getRelativeTime }}
          </p>
        </div>
      </div>
      <div
        class="d-flex align-items-center"
        style="height: 40px"
        v-if="this.$route.name === 'cms-table'"
      >
        <select
          class="form-select form-select-sm text-uppercase"
          style="width: 60%"
          v-model="waitlist.status"
          @change.prevent="handlerPatchWaitlist(waitlist.status, waitlist.id)"
        >
          <option disabled selected>Open this select menu</option>
          <option value="request">request</option>
          <option value="waiting">waiting</option>
          <option value="onprogres">onprogres</option>
          <option value="done">done</option>
          <option value="archived">archived</option>
        </select>
      </div>
    </td>
  </tr>
</template>
