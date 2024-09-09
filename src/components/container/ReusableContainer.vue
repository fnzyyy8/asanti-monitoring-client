<script setup>

import {computed, onBeforeMount, onUnmounted} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false
  },
  alignMiddle: {
    type: Boolean,
    default: false
  },
  height: {
    type: Number,
    required: false
  },
  width: {
    type: Number,
    required: false
  }

});

const alignMiddleClass = computed(() => {
  return props.alignMiddle ? "justify-content-center align-items-center" : "";
});

const cardStyle = computed(() => {

  return {
    width: props.width ? `${props.width}px` : '',
    height: props.height ? `${props.height}px` : ''
  };

});

</script>

<template>
  <div class="container-fluid bg-body-tertiary rounded-3 p-3 d-flex flex-column justify-content-between"
       :style="cardStyle">
    <div v-if="props.name" class="d-flex">
      <h5>{{ name }}</h5>
    </div>
    <div class="mt-3 overflow-hidden container-reuse d-flex" :class="alignMiddleClass">
      <slot/>
    </div>
  </div>

</template>

<style scoped>
.container-reuse{
scrollbar-width: none;
}

</style>