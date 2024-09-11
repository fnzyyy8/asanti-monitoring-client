<script setup>
import {RouterView, useRoute} from 'vue-router';
import Sidebar from "@/components/layouts/Sidebar.vue";
import {computed} from "vue";
import Navbar from "@/components/layouts/Navbar.vue";

const route = useRoute();
const isLoginRoute = computed(() => route.path === "/users/login");
</script>

<template>
  <div v-if="isLoginRoute === false" class="d-flex p-2 h-100 ">
    <Sidebar/>
    <div class="container-fluid overflow-x-hidden ms-2 h-100 d-flex flex-column">
      <Navbar/>
      <main class= "h-100 w-100 mt-2 bg-white rounded-3">
        <div class="p-3">
          <RouterView/>
        </div>
      </main>
    </div>
  </div>

  <!--  Out of login view -->
  <div v-else>
    <RouterView/>
  </div>
</template>

<style scoped>
main {
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
}

</style>
