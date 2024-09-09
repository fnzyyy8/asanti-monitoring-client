<script setup>
import {RouterView, useRoute} from 'vue-router';
import Sidebar from "@/components/layouts/Sidebar.vue";
import {computed} from "vue";
import Navbar from "@/components/layouts/Navbar.vue";

const route = useRoute();
const isLoginRoute = computed(() => route.path === "/users/login");
</script>

<template>
  <div v-if="isLoginRoute === false" class="d-flex p-4 vh-100">
    <div class="d-flex grid gap-4 w-100">
      <Sidebar/>
      <div class="d-flex flex-column w-100">
        <Navbar/>
        <div class="mt-3 rounded-3 h-100 overflow-auto body-view">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>

  <!--  Out of login view -->
  <div v-else>
    <RouterView/>
  </div>
</template>

<style scoped>
.body-view{
  scrollbar-width: none;
}

</style>
