<script>
import { mapActions, mapState } from 'pinia';
import { useWaitlistStore } from '../stores/waitinglist';
import Tablebody from '../components/TableBody.vue';

export default {
  components:{
    Tablebody
  },
  created(){
    this.fetchWaitingList(['done','waiting','onprogres'])
  },
  computed:{
    ...mapState(useWaitlistStore,['waitlists'])
  },
  methods:{
    ...mapActions(useWaitlistStore,['fetchWaitingList'])
  }
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
            <Tablebody v-for="waitlist in waitlists" :key="waitlist.id" :waitlist="waitlist"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
