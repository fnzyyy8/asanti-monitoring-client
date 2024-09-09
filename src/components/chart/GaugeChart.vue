<script setup>
import ApexChart from 'apexcharts';
import {computed, onMounted, ref} from "vue";

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
    default: 500
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
      offsetY: -20,
      width: props.size,
      height: 'auto',
    },
    plotOptions: {
      radialBar: {
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
    }, grid: {
      padding: {
        top: -10
      }
    },
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

</script>

<template>
  <div>
    <div ref="refChart"></div>
  </div>
</template>

<style scoped>

</style>