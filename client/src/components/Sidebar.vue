<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCardStore } from '../stores/card'
import { useDeckStore } from '../stores/deck'

export default {
  computed: {
    ...mapState(useCardStore, ['cards']),
    ...mapWritableState(useDeckStore, ['inputDeck'])
  },
  data() {
    return {
      options: {
        "Monster": [
          "Aqua", "Beast", "Beast - Warrior", "Creator - God", "Cyberse",
          "Dinosaur", "Divine - Beast", "Dragon", "Fairy", "Fiend", "Fish",
          "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent",
          "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"
        ],
        "Spell": [
          "Normal", "Field", "Equip", "Continuous", "Quick - Play", "Ritual"
        ],
        "Trap": ["Normal", "Continuous", "Counter"]
      },
      races: [],
      selectedType: "",
      selectedRace: "",
      name: ""
    }
  },
  watch: {
    selectedType: function () {
      this.races = []
      this.selectedRace = ""
      if (this.selectedType.length > 0) {
        this.races = this.options[this.selectedType]
      }
    }
  },
  methods: {
    ...mapActions(useCardStore, ['getCard']),
    filterTrigger() {
      this.getCard(this.name, this.selectedRace)
    },
    inputToArray(id) {
      this.inputDeck.push(id)
    }
  }
}
</script>

<template>
  <section id="sidebar">
    <form @submit.prevent="filterTrigger">
      <div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Filter by name</label>
          <input v-model="name" type="text" class="form-control" placeholder="Ex: Dark Magician">
        </div>
      </div>
      <div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Filter by Type</label>
          <select v-model="selectedType" class="form-control">
            <option value="">-- Card Type --</option>
            <option v-for="(type_obj, type) in options">{{ type }}</option>
          </select>
        </div>
      </div>
      <div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Filter by Sub-Type</label>
          <select v-model="selectedRace" class="form-control" :disabled="races.length == 0">
            <option value="">-- Card Sub-Type --</option>
            <option v-for="race in races">{{ race }}</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">Filter</button>
      </div>
    </form>
    <div v-if="this.$route.name == 'DeckInput' || this.$route.name == 'DeckDetail'">
      <table class="table text-center" style="margin-top:10px;">
        <thead class="table-success">
          <tr>
            <th scope="col">Card Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="cards.length == 0">
            <td colspan="4">Currently No item to be displayed</td>
          </tr>
          <tr v-else v-for="card in cards" :key="card.id">
            <td>{{ card.name }}</td>
            <td>
              <button type="button" class="btn btn-primary" style="margin-right: 10px;"
                @click.prevent="inputToArray(card.id)">Input</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style>

</style>