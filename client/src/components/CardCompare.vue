<script>
import { mapState } from 'pinia';
import { useCardStore } from '../stores/card';

export default {
  data() {
    return {
      isCardOne: false,
      isCardTwo: false
    }
  },
  computed: {
    ...mapState(useCardStore, ['cardOne', 'cardTwo'])
  },
  watch: {
    cardOne: function () {
      this.isCardOne = true;
    },
    cardTwo: function () {
      this.isCardTwo = true;
    }
  }
}
</script>

<template>
  <section id="comparison">
    <div class="card" v-if="isCardOne == true">
      <img class="card-img-top" :src="cardOne.card_images[0].image_url_small" alt="Card image cap">
      <div class="card-body">
        <p class="card-text text-center">{{ cardOne.name }}</p>
        <p><b>Type : </b>{{ cardOne.race }} {{ cardOne.type }}</p>
        <p><b>Effect : </b></p>
        <p>{{ cardOne.desc }}</p>
        <br>
        <p>Prices:</p>
        <p>Amazon : {{ cardOne.card_prices[0].amazon_price }} USD</p>
        <p>Ebay: {{ cardOne.card_prices[0].ebay_price }} USD</p>
        <p>TCG_Player: {{ cardOne.card_prices[0].tcgplayer_price }} USD</p>
        <p>Lowest Price (IDR) :</p><br>
        <p>{{ cardOne.lowPrice.result }}</p>
        <br>
      </div>
    </div>
    <div class="card" v-if="isCardTwo == true">
      <img class="card-img-top" :src="cardTwo.card_images[0].image_url_small" alt="Card image cap">
      <div class="card-body">
        <p class="card-text text-center">{{ cardTwo.name }}</p>
        <p><b>Type : </b>{{ cardTwo.race }} {{ cardTwo.type }}</p>
        <p><b>Effect : </b></p>
        <p>{{ cardTwo.desc }}</p>
        <br>
        <p>Prices:</p>
        <p>Amazon : {{ cardTwo.card_prices[0].amazon_price }} USD</p>
        <p>Ebay: {{ cardTwo.card_prices[0].ebay_price }} USD</p>
        <p>TCG_Player: {{ cardTwo.card_prices[0].tcgplayer_price }} USD</p>
        <p>Lowest Price (IDR) :</p>
        <p>Rp {{ cardTwo.lowPrice.result }}</p>
        <br>
      </div>
    </div>
  </section>
</template>

<style>

</style>