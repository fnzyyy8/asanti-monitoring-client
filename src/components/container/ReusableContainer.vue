<script setup>

import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false
  },
  alignMiddle: {
    type: Boolean,
    required: false
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
  <div :style=cardStyle class="shadow-lg bg-white rounded-3" :class="alignMiddleClass">
    <div class="d-flex flex-column h-100 w-100 p-3">
      <div v-if="props.name" class="mb-3">
        <h5>{{ props.name }}</h5>
      </div>
      <slot/>
    </div>

  </div>

</template>

<style scoped>


</style>