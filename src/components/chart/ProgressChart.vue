<script setup>
import ApexChart from 'apexcharts';
import {onMounted, ref} from "vue";

const props = defineProps({
  title: {
    type: Array,
    required: true
  },
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

const chartRef = ref(null);

onMounted(() => {

  const option = {
    chart: {
      type: "bar",
      width: props.size * 2,
      height: props.size
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top"
        }
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      categories: props.title
    },
    series: [
      {
        name: "Target",
        data: props.target
      },
      {
        name: "Selesai",
        data: props.finish
      }
    ],
    dataLabels: {
      enabled: true,
      offsetX: 15,
      style: {
        colors: ["#000"],
        fontSize: "10px"
      }
    },
    stroke: {
      show: true,
      width: 1
    },
    colors: ["#FFCC47", "rgba(255, 204, 71, 0.30)"],
    grid: {
      show: false
    }
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