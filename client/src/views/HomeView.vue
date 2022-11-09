<script></script>

<template>
  <!-- bootstrap 12 col -->
  <section class="col-md-9 ms-sm-auto col-lg-12 px-md-4" id="product-section">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="display-2">Products</h1>
    </div>
    <div class="row">
      <!-- left col -->

      <!-- ca -->
      <div class="col-3">
        <!-- search -->
        <h5>Search Products</h5>
        <p>Just type here what are you looking for</p>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-warning">Search</button>
        </div>

        <!-- <div class="card" style="width: 18rem">
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div> -->
      </div>
      <!-- right col -->
      <div class="col-9">
        <div class="row">
          <!-- card -->
        </div>
        <!-- page -->
        <nav class="pagesection" aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Page</a>
            </li>
            <li class="page-item" v-for="idx in totalPage" :key="idx">
              <a
                class="page-link"
                href="#"
                @click.prevent="clickPage((idx - 1) * 9)"
                >{{ idx }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pagesection {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
