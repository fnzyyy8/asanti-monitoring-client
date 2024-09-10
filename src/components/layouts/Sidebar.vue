<script setup>

const date = new Date();
const formatedDate = `${date.getDate()}`
    + " " + `${date.toLocaleString('default', {month: 'short'})}`
    + " " + `${date.getFullYear().toString().slice(-2)}`;

</script>

<template>
  <div class="bg-body-tertiary sidebar-body rounded-4 shadow-sm">
    <div class="d-flex flex-column justify-content-between p-3 h-100">
      <aside>
        <div class="d-flex flex-column">
          <a href="/public" class="navbar-brand d-flex justify-content-center">
            <img src="../../assets/Icon%20sena.png" alt="logo-sena" class="logo-sena">
          </a>
          <hr>
        </div>
        <div class="d-flex flex-column w-100">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a href="/task" class="nav-link">
                Your Task
              </a>
            </li>
            <li class="nav-item">
              <a href="/testing/count" class="nav-link">
                Testing
              </a>
            </li>
            <li class="nav-item">
              <a href="/users/login" class="nav-link">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a href="/public" class="nav-link">
                PAPP
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="text-center py-3">
        <div class="bg-white p-2 rounded-4 d-flex justify-content-center align-items-center shadow-sm">
          <h6 class="m-0">{{ formatedDate }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-body {
  max-width: 240px;
}

.logo-sena {
  width: 150px;
}

</style>