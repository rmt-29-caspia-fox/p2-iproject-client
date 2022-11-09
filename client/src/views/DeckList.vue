<script>
import { mapActions, mapState } from 'pinia';
import { useDeckStore } from '../stores/deck'

export default {
  computed: {
    ...mapState(useDeckStore, ['decks'])
  },
  methods: {
    ...mapActions(useDeckStore, ['fetchDeck', 'downloadDeck']),
    downloadTrigger(id) {
      this.downloadDeck(id)
    }
  },
  created() {
    this.fetchDeck()
  }
}
</script>

<template>
  <button type="button" class="btn btn-primary" @click.prevent="this.$router.push('/deck/input')"
    style="margin-bottom: 30px; margin-top:30px; margin-left:30px">Input New
    Deck</button>
  <table class="table text-center" style="padding: 20px;">
    <thead class="table-success">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Deck Name</th>
        <th scope="col">Total Card</th>
        <th scope="col" style="width:300px">Action </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="decks.length == 0">
        <td colspan="4">Currently No item to be displayed</td>
      </tr>
      <tr v-else v-for="(deck, index) in decks" :key="deck.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ deck.name }}</td>
        <td>{{ deck.Cards.length }}</td>
        <td>
          <button type="button" class="btn btn-primary" @click.prevent="this.$router.push(`/deck/${deck.id}`)"
            style="margin-right: 10px;">Edit Deck</button>
          <button type="button" class="btn btn-danger" @click.prevent="downloadTrigger(deck.id)">Download Deck</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>

</style>