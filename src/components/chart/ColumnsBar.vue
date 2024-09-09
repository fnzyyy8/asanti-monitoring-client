<script setup>
import ApexChart from "apexcharts";
import {onMounted, ref} from "vue";

const props = defineProps({
  title: {
    type: Array,
    required: true
  },
  target: {
    type: [Array,Number],
    required: true
  },
  review: {
    type: [Array,Number],
    required: true
  },
  finish: {
    type: [Array,Number],
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 250
  }
});


const refChart = ref(null);

onMounted(() => {


  const option = {
    chart: {
      type: 'bar',
      height: props.size,
      width: 1000,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    xaxis: {
      categories: props.title
    },
    series: [
      {
        name: "Target",
        data: props.target
      }, {
        name: "Finish",
        data: props.finish
      }, {
        name: "Review",
        data: props.review
      }
    ],
    colors: ["#C26060", "#77D66E", "#FFF173"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false
    },
  };

  const chart = new ApexChart(refChart.value, option);
  chart.render();
});

</script>

<template>
  <div ref="refChart"></div>
</template>

<style scoped>

</style>