<script setup>
import ApexChart from 'apexcharts';
import {onMounted, ref} from "vue";

const props = defineProps({
  target: {
    type: Array,
    required: true
  },
  finish: {
    type: Array,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 400
  }
});

const refChart = ref(null);
onMounted(() => {

  const targetValue = props.target.reduce((acc, curr) => acc + curr, 0);
  const finishValue = props.finish.reduce((acc, curr) => acc + curr, 0);

  const percentage = ((finishValue / targetValue) * 100).toFixed(2);

  const option = {
    series: [percentage],
    chart: {
      type: "radialBar",
      width: props.size,
    },
    responsive: [
      {
        breakpoints: 992,
        options: {
          width: props.size / 2,
        }
      }
    ],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%"
        },
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "rgba(255, 204, 71, 0.30)"
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -20,
            fontSize: '24px'
          }
        }
      },
    }, grid: {},
    fill: {
      colors: ['#FFCC47'],
      type: 'solid',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },

  };

  const chart = new ApexChart(refChart.value, option);
  chart.render();
});

console.log(refChart);

</script>

<template>
  <div ref="refChart" class="d-flex justify-content-center align-items-center"></div>
</template>

<style scoped>

</style>