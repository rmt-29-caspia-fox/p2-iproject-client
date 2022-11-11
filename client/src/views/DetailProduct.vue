<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { watch } from "vue";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      provinceId: "",
      cityId: "",
      address: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, [
      "product",
      "isLogin",
      "provinces",
      "cities",
      "shippingCost",
    ]),
  },
  methods: {
    ...mapActions(useGlobalStore, [
      "getProduct",
      "getProvince",
      "getCity",
      "getCost",
      "payNow",
    ]),
    paymentHandler() {
      const payload = {
        address: this.address,
        cityId: this.cityId,
        provinceId: this.provinceId,
        shippingCost: this.shippingCost,
        productId: this.product.id,
        totalPrice: this.product.price + this.shippingCost,
      };
      this.payNow(payload);
    },
  },
  watch: {
    "$route.params": {
      handler(params) {
        let id = params.id;
        this.getProduct(id);
        this.getProvince();
      },
      immediate: true,
    },
    provinceId() {
      this.getCity(this.provinceId);
    },
    cityId() {
      const payload = {
        destination: this.cityId,
        weight: 1,
      };
      this.getCost(payload);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{ product.name }}</h2>
        <hr />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="product.imgUrl"
                class="img-fluid rounded-start w-100"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="lead">Price :</p>
                <p class="card-text">
                  <b>Rp {{ product.price }}</b>
                </p>
                <p class="lead">Description :</p>
                <p class="card-text">
                  <b>{{ product.description }}</b>
                </p>
                <p
                  class="card-text d-flex justify-content-between align-items-center"
                >
                  <small>
                    posted by : {{ product.updatedAt }}
                    <br />
                    last updated {{ product.updatedAt }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="isLogin">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="card-title">Order Form</div>
            <hr />
            <form action="">
              <div class="mb-3">
                <label class="form-label">Address</label>
                <input v-model="address" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Province</label>
                <select
                  name="province"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="provinceId"
                >
                  <option
                    v-for="province in provinces"
                    :value="province.province_id"
                  >
                    {{ province.province }}
                  </option>
                </select>
              </div>
              <div class="mb-3" v-if="cities.length !== 0">
                <label class="form-label">City</label>
                <select
                  v-model="cityId"
                  name="province"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option v-for="city in cities" :value="city.city_id">
                    {{ city.city_name }}
                  </option>
                </select>
              </div>
              <div class="mb-3" v-if="cityId.length !== 0">
                <label class="form-label">Shipping Cost</label>
                <input
                  type="text"
                  class="form-control"
                  :value="shippingCost"
                  disabled
                />
              </div>
            </form>
            <button
              v-if="shippingCost !== 0"
              @click.prevent="paymentHandler"
              class="btn btn-lg btn-warning"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
