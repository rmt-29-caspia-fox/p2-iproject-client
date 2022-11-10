<script>
import { mapState, mapActions } from 'pinia';
import { useCardStore } from '../stores/card';

export default {
  computed: {
    ...mapState(useCardStore, ['cards', 'cardOne', 'cardTwo'])
  },
  methods: {
    ...mapActions(useCardStore, ['getCardOne', 'getCardTwo']),
    compareOne(id) {
      this.getCardOne(id)
    },
    compareTwo(id) {
      this.getCardTwo(id)
    }
  }
}
</script>

<template>
  <section id="products">
    <div class="container">
      <div class="row">
        <table class="table text-center" style="margin: 20px;">
          <thead class="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Card Name</th>
              <th scope="col">Card Type</th>
              <th scope="col" style="width:300px">Action </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="cards.length == 0">
              <td colspan="4">Currently No item to be displayed</td>
            </tr>
            <tr v-else v-for="card, index in cards" :key="card.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ card.name }}</td>
              <td>{{ card.type }}</td>
              <td>
                <button type="button" class="btn btn-primary" style="margin-right: 10px;"
                  @click.prevent="compareOne(card.id)">Slot 1</button>
                <button type="button" class="btn btn-success" @click.prevent="compareTwo(card.id)">Slot 2</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style>

</style>