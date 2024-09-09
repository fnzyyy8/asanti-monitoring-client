<script setup>

import {ref} from "vue";

const count = ref(0);

const data = [
  {
    title: "Memasak",
    target: 12,
    finish: 13
  },
  {
    title: "Berkebun",
    target: 8,
    finish: 2
  },
  {
    title: "Memancing",
    target: 10,
    finish: 5
  }, {
    title: "Bersetubuh",
    target: 24,
    finish: 10
  },

];

const label = "Pekerjaan Rutin";

const title = data.map(item => item.title);
const target = data.map(item => item.target);
const finish = data.map(item => item.finish);


</script>

<template>

  <div>

<!--    <BarChart :finish="finish" :target="target" :name-of-data="title" :size="500" :label="label"/>-->
    <div>
      <h3>{{ count }}</h3>
    </div>
    <div class="">
      <button class="btn btn-success mx-2" @click="count++">Increment</button>
      <button class="btn btn-danger mx-2" @click="count--">Decrement</button>
    </div>
  </div>

</template>

<style scoped>

</style>