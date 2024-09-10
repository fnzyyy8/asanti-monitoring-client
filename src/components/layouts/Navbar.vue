<script setup>

import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const gotoLogin = () => {
  router.push("/users/login");
};

const routeName = useRoute();
</script>

<template>
  <header>
    <nav class="navbar-expand-lg navbar bg-body-tertiary sticky-top rounded-3">
      <div class="container-fluid">
        <div>
          <h4>{{routeName.name}}</h4>
        </div>
        <div class="d-flex bg-white p-2 rounded-3">
          <div class="me-3">
            <h6>Farhan</h6>
            <p>Engineer</p>
          </div>
          <img src="@/assets/logout.svg" alt="logout" width="28">
        </div>
      </div>
    </nav>
  </header>

</template>

<style scoped>
.navbar-style {
  height: 72px;
}

</style>