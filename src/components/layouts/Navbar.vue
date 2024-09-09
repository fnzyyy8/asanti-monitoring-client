<script setup>

import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const gotoLogin = () => {
  router.push("/users/login");
};

const routeName = useRoute();

</script>

<template>
  <header class="">
    <nav class="navbar-style bg-body-tertiary shadow-sm rounded-2 navbar px-3">
      <div class="">
        <h5 class="m-0">{{routeName.name}}</h5>
      </div>
      <button class="d-flex justify-content-center align-items-center bg-white p-2 rounded-3 border-0 shadow-sm"
              @click="gotoLogin">
        <div>
          <h6 class="m-0">Farhan Septiansyah</h6>
          <p class="lh-1 m-0">Document Control</p>
        </div>
        <div class="d-flex ms-3">
          <img src="@/assets/logout.svg" alt="logout" width="32">
        </div>
      </button>
    </nav>
  </header>

</template>

<style scoped>
.navbar-style {
  height: 72px;
}

</style>