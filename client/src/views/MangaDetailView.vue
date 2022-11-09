<script>
</script>

<template>
  <!-- bootstrap 12 col -->
  <section class="col-md-9 ms-sm-auto col-lg-12 px-md-4" id="product-section">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="display-2">Product Details</h1>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4">
                    <img id="main-image" :src="product.imgUrl" width="250" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <i class="fa fa-long-arrow-left"></i>
                      <RouterLink to="/" class="ml-1">Back</RouterLink>
                    </div>
                    <i class="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div class="mt-4 mb-3">
                    <span class="text-uppercase text-muted brand">{{
                      product.Category?.name
                    }}</span>
                    <h5 class="text-uppercase">{{ product.name }}</h5>
                    <div class="price d-flex flex-row align-items-center">
                      <h5 class="act-price">{{ priceIDR }}</h5>
                    </div>
                  </div>
                  <h6>Description:</h6>
                  <p class="about">
                    {{ product.description }}
                  </p>
                  <div class="sizes mt-5">
                    <h6 class="text-uppercase"></h6>
                  </div>
                  <div>
                    <h5>QR Code</h5>
                    <img :src="qrcode" class="qrcode" />
                  </div>
                  <div class="cart mt-4 align-items-center">
                    <button
                      @click.prevent="addToWishlistLocal"
                      class="btn btn-warning text-uppercase mr-2 px-4"
                    >
                      Add to wishlist
                    </button>
                    <i class="fa fa-heart text-muted"></i>
                    <i class="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  background-color: #000;
}
.card {
  border: none;
}
.product {
  background-color: #eee;
}
.brand {
  font-size: 13px;
}
.act-price {
  color: red;
  font-weight: 700;
}
.dis-price {
  text-decoration: line-through;
}
.about {
  font-size: 14px;
}
.color {
  margin-bottom: 10px;
}
label.radio {
  cursor: pointer;
}
label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}
label.radio span {
  padding: 2px 9px;
  border: 2px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase;
}
label.radio input:checked + span {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff;
}
.btn-danger {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important;
}
.btn-danger:hover {
  background-color: #da0606 !important;
  border-color: #da0606 !important;
}
.btn-danger:focus {
  box-shadow: none;
}
.cart i {
  margin-right: 10px;
}

.qrcode {
  width: 130px;
  height: 130px;
}
</style>
