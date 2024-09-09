<script setup>
import {onMounted, ref} from "vue";
import ApexChart from 'apexcharts';

const props = defineProps({
  target: {
    type: [Array, Number],
    required: true
  },
  review: {
    type: [Array, Number],
    required: true
  },
  finish: {
    type: [Array, Number],
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 800
  }
});

const chartRef = ref(null);

onMounted(() => {

  const targetValues = Array.isArray(props.target) ? props.target.reduce((acc, current) => acc + current, 0)
      : props.target;
  const reviewValues = Array.isArray(props.review) ? props.review.reduce((acc, current) => acc + current, 0)
      : props.review;
  const finishValues = Array.isArray(props.finish) ? props.finish.reduce((acc, current) => acc + current, 0)
      : props.finish;

  console.log(targetValues);


  const dataSet = [
    targetValues - reviewValues - finishValues,
    reviewValues,
    finishValues
  ];

  const option = {
    chart: {
      type: 'donut',
      height: props.size,
      width: props.size
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Target", "Review", "Finish"],
    series: dataSet,
    colors: ["#C26060", "#FFF173", "#77D66E"],
    legend: {
      position: "bottom"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: props.size
        },
        legend: {
          position: 'bottom'
        }
      }
    ]
  };

  const chart = new ApexChart(chartRef.value, option);
  chart.render();

});

</script>

<template>

  <div ref="chartRef"></div>

</template>

<style scoped>

</style>