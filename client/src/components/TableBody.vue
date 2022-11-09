<script>
export default {
  props: ["waitlist"],
  created() {
    console.log(this.$route.name);
  },
};
</script>

<template>
  <tr>
    <td>
      <div class="d-flex align-items-center">
        <div class="ms-3">
          <p class="fw-bold mb-1">{{ waitlist.Customer.name }}</p>
          <p class="text-muted mb-0">{{ waitlist.Customer.email }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center">
        <div class="ms-3">
          <p class="fw-bold mb-1">{{ waitlist.brand }}</p>
          <p class="text-muted mb-0">{{ waitlist.name }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center" style="height: 40px">
        <p class="fw-bold mb-1">{{ waitlist.service }}</p>
      </div>
    </td>
    <td>
      <div class="d-flex align-items-center" style="height: 40px">
        <p class="fw-bold mb-1" v-if="this.$route.name === 'waitinglist'">
          {{ waitlist.service }}
        </p>
        <select
          class="form-select form-select-sm text-uppercase"
          v-if="this.$route.name === 'cms-table'"
          style="width: 60%"
        >
          <option disabled selected>Open this select menu</option>
          <option value="waiting">waiting</option>
          <option value="onprogres">onprogres</option>
          <option value="done">done</option>
        </select>
      </div>
    </td>
    <td>
      
    </td>
  </tr>
</template>
