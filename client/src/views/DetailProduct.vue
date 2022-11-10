<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { watch } from "vue";
import { useGlobalStore } from "../stores/globalStore";

export default {
  computed: {
    ...mapState(useGlobalStore, ["product", "isLogin", "provinces"]),
    ...mapWritableState(useGlobalStore, ["provinceId"]),
  },
  methods: {
    ...mapActions(useGlobalStore, [
      "getProduct",
      "getProvince",
      "getCity",
      "payNow",
    ]),
    cityHandler() {
      this.getCity(this.provinceId);
    },
    paymentHandler() {
      this.payNow();
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
                <input type="address" class="form-control" />
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
              <div class="mb-3">
                <label class="form-label">Province</label>
                <select
                  name="province"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option v-for="city in cities"></option>
                </select>
              </div>
            </form>
            <button
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
