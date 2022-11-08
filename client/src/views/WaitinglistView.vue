<script>
export default {};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center content"
    id="table-book"
  >
    <div class="box bg-linier-2 p-4">
      <div class="container-fluid">
        <h1 class="text-light mb-4">Book Order</h1>
        <table class="table table-hover">
          <thead class="bg-light">
            <tr>
              <th>Name and Email</th>
              <th>Car</th>
              <th>Servis</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">John Doe</p>
                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Toyota</p>
                    <p class="text-muted mb-0">Innova</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Heavy</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center" style="height: 40px">
                  <span class="badge badge-success rounded-pill d-inline"
                    >Waiting</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Alex Ray</p>
                    <p class="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Toyota</p>
                    <p class="text-muted mb-0">Alphart</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Medium</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center" style="height: 40px">
                  <span class="badge badge-success rounded-pill d-inline"
                    >Onprogress</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Kate Hunington</p>
                    <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Toyota</p>
                    <p class="text-muted mb-0">Alphart</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Light</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center" style="height: 40px">
                  <span class="badge badge-success rounded-pill d-inline"
                    >Done</span
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
