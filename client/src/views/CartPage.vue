<script></script>

<template>
  <!-- menampilkan semua product yang sudah di add ke cart dengan display gambar, nama, harga, dan jumlah yang ingin di beli ada increment dan decrement serta delete, ada tombol payment dan redirect ke payment -->
  <div class="container">
    <div
      class="row d-flex justify-content-center"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 10%;
        margin-bottom: 3%;
      "
    >
      <div class="col-12 text-center">
        <h3>FirstName LastName's Cart</h3>
      </div>
    </div>
    <div class="container">
      <div
        class="row"
        style="padding-left: 3%; padding-right: 3%; margin-bottom: 3%"
      >
        <table class="table table-bordered">
          <thead>
            <tr class="align-middle text-center">
              <th style="width: 5%">No.</th>
              <th style="width: 20%">Image</th>
              <th style="width: 30%">Name</th>
              <th style="width: 15%">Quantity</th>
              <th style="width: 25%">Price</th>
              <th style="width: 5%">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle text-center">
              <td>1</td>
              <td>gambar</td>
              <td>burrito</td>
              <td>2</td>
              <td>Rp 200,000.00</td>
              <td>delete button</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center text-center">
          <div>
            <h3>Total Price: Rp 200,000.00</h3>
            <br />
            <button class="btn btn-lazpiz">Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
