<script>
import { mapActions } from 'pinia'
import { useCardStore } from '../stores/card'

export default {
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
  </section>
</template>

<style>

</style>