<script>
export default {

}
</script>

<template>
  <div class="lightbox-gallery">
    <div class="container">
      <div class="intro">
        <h2>Lightbox Gallery</h2>
        <div style="display: flex; flex-direction: row; justify-content:space-between;">
          <p>
            Total Cards : 30
            <br>Total Price :
            <br>
            <span style="margin-right:30px">IDR : 1.000.000</span>
            <span style="margin-right:30px">USD : 30.000</span>
            <span>EUR : 20.000</span>
          </p>
          <div>
            <button type="button" class="btn btn-success" style="margin-right: 20px;">Download Deck</button>
            <button type="button" class="btn btn-danger">Delete Deck</button>
          </div>
        </div>
      </div>
      <div class="row photos">
        <!-- <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="" data-lightbox="photos">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg">
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="" data-lightbox="photos">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg">
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="" data-lightbox="photos">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg">
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="" data-lightbox="photos">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg">
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="" data-lightbox="photos">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards_small/6983839.jpg">
          </a>
        </div> -->
        <div class="col-sm-6 col-md-4 col-lg-3 item">
          <a href="https://i.imgur.com/gX11Vt5.jpg" data-lightbox="photos">
            <img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg">
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/zmzERpe.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/gX11Vt5.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/gX11Vt5.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/pZcUS2Y.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/pZcUS2Y.jpg"></a></div>
        <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="https://i.imgur.com/06Ajq7f.jpg"
            data-lightbox="photos"><img class="img-fluid" src="https://i.imgur.com/06Ajq7f.jpg"></a></div>
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