<script setup>

</script>

<template>
  <div class="container d-flex justify-content-center align-items-center login-page">

    <div class="card shadow-lg px-5 py-3 login-card">
      <div class="flex-column d-flex justify-content-center align-items-center">
        <img src="@/assets/Icon%20sena.png" class="img-fluid icon-sena">
        <h5>ASANTI Monitoring</h5>
      </div>
      <span class="border-top my-2"></span>
      <form class="mb-3">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password">
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-primary w-100 shadow-sm">
            Login
          </button>
        </div>
      </form>
      <span class="border-top my-2"></span>
      <div class="d-flex justify-content-center align-items-center flex-column">
        <span>&copy; Asanti Monitoring</span>
        <span>PT. Solusi Energy Nusantara</span>
      </div>
    </div>

  </div>

</template>

<style scoped>
.icon-sena {
  height: 150px;
}

.login-card {
  min-width: 450px;
}

.login-page{
  height: 650px;
}

</style>