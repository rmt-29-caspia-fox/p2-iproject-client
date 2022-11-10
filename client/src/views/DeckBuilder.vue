<script>
import { mapActions, mapState } from 'pinia';
import SidebarVue from '../components/Sidebar.vue';
import { useCardStore } from '../stores/card';
import { useDeckStore } from '../stores/deck';

export default {
  computed: {
    ...mapState(useDeckStore, ['inputDeck', 'qrCode'])
  },
  data() {
    return {
      name: ""
    }
  },
  components: {
    SidebarVue
  },
  methods: {
    ...mapActions(useDeckStore, ['deleteDeck', 'saveDeck', 'fetchDeck', 'deckDetail', 'editDeck', 'fetchQR']),
    ...mapActions(useCardStore, ['getCard']),
    triggerDelete() {
      this.deleteDeck(this.$route.params.id)
      this.$router.push('/deck');
      this.fetchDeck();
    },
    triggerSave() {
      this.saveDeck(this.name);
      this.fetchDeck();
      this.$router.push('/deck')
      this.inputDeck.length = 0
    },
    triggerEdit() {
      this.editDeck(this.$route.params.id, this.name);
      this.fetchDeck();
      this.$router.push('/deck')
      this.inputDeck.length = 0
    },
    removeItem(index) {
      this.inputDeck.splice(index, 1);
    }
  },
  created() {
    if (this.$route.params.id != undefined) {
      this.deckDetail(this.$route.params.id)
    }
    this.fetchQR(this.$route.params.id);
  }
}
</script>

<template>
  <SidebarVue />
  <div class="lightbox-gallery">

    <div class="container">
      <div class="intro">
        <div class="col-6 form-group" style="margin-top:20px;">
          <input v-model="name" type="text" class="form-control" placeholder="Input your Deck Name">
        </div>
        <img :src="qrCode" style="margin-right:40px">
        <div style="display: flex; flex-direction: row; justify-content:space-between;">
          <p style="font-size:20px">
            Total Cards : {{ inputDeck.length }}
          </p>
          <div>
            <button v-if="this.$route.name == 'DeckDetail'" type="button" class="btn btn-success"
              style="margin-right: 20px;" @click.prevent="triggerEdit">Save
              Deck</button>
            <button v-else type="button" class="btn btn-success" style="margin-right: 20px;"
              @click.prevent="triggerSave">Save
              Deck 1</button>
            <button type="button" class="btn btn-danger" @click.prevent="triggerDelete">Delete Deck</button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div v-for="(card, index) in inputDeck" :key="index" class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
          <div class="card">
            <img class="card-img-top" :src="`https://images.ygoprodeck.com/images/cards_small/${card}.jpg`"
              alt="Card image cap" @click="removeItem(index)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.lightbox-gallery {
  background-image: linear-gradient(#55a139, #ffffff);
  background-repeat: no-repeat;
  color: #000;
  overflow-x: hidden
}

.lightbox-gallery p {
  color: #fff
}

.lightbox-gallery h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #fff
}

@media (max-width:767px) {
  .lightbox-gallery h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px
  }
}

.lightbox-gallery .intro {
  font-size: 16px;
  margin-bottom: 20px;
}

.lightbox-gallery .intro p {
  margin-bottom: 0
}

.lightbox-gallery .photos {
  padding-bottom: 20px
}

.lightbox-gallery .item {
  padding-bottom: 30px
}
</style>