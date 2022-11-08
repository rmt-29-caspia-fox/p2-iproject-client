<script>
export default {};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center content"
    id="form-book"
  >
    <div class="box bg-linier-2">
      <form action="">
        <h2 class="text-center mb-5 border-bottom border-warning text-light">
          Book Order
        </h2>
        <div class="row justify-content-center align-items-center px-4 px-md-0">
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input type="text" id="form8Example1" class="form-control" />
              <label class="form-label" for="form8Example1">Name</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input type="email" id="form8Example2" class="form-control" />
              <label class="form-label" for="form8Example2"
                >Email address</label
              >
            </div>
          </div>
        </div>
        <hr />
        <h3 class="text-center text-light">choose you cars</h3>
        <hr />
        <div class="row px-4 px-md-0">
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <select class="form-select">
                <option value="1">MVP</option>
                <option value="2">Sedan</option>
                <option value="3">Hatchback</option>
              </select>
              <label class="visually" for="inlineFormSelectPref">type</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <select class="form-select">
                <option value="1">Toyota</option>
                <option value="2">Honda</option>
                <option value="3">Hyundai</option>
              </select>
              <label class="visually" for="inlineFormSelectPref">Brand</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <select class="form-select">
                <option value="1">Kijang</option>
                <option value="2">Fortuner</option>
                <option value="3">Alphart</option>
              </select>
              <label class="visually" for="inlineFormSelectPref"
                >Name of car</label
              >
            </div>
          </div>
          <div class="col-12 mt-3 text-light">
            <div class="form-outline">
              <select class="form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label class="visually" for="inlineFormSelectPref"
                >type of wash</label
              >
              <button
                type="submit"
                class="btn btn-outline-secondary rounded-pill w-100 mt-5 text-light"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
