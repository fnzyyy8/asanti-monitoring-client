<template>
  <div class="d-flex grid gap-3">
    <div>
      <ReusableContainer name="Kinerja Total" :align-middle="true">
        <div>
          <GaugeChart :finish="progressFinish" :target="progressTarget" :size="400"/>
        </div>
      </ReusableContainer>
      <div class="text-center d-flex grid gap-3 mt-3">
        <ReusableContainer :align-middle="true" :width="500">
          <h5>Target : {{ expectedPercentage }}%</h5>
        </ReusableContainer>
        <ReusableContainer :align-middle="true">
          <h5>Deviasi: <span :style="{color:deviationColor}">{{ deviation }}%</span></h5>
        </ReusableContainer>
      </div>
    </div>

    <ReusableContainer name="Kinerja Dokumen" :align-middle="true">
      <div>
        <ProgressChart :title="progressTitle" :finish="progressFinish" :target="progressTarget" :size="300"/>
      </div>
    </ReusableContainer>
  </div>

  <div class="d-flex grid gap-3 mt-3">
    <ReusableContainer name="Rutin dan PAPP" :height="490">
      <tables>
        <template v-slot:head>
          <th v-for="(index) in head" :key="index">{{ index }}</th>
          <th></th>
        </template>
        <template v-slot:body>
          <tr v-for="(row,rowIndex) in body" :key="rowIndex">
            <td v-for="(cell,cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            <td>
              <button class="btn btn-primary">Home</button>
            </td>
          </tr>
        </template>
      </tables>
    </ReusableContainer>
    <ReusableContainer name="Non Rutin" :height="490">
      <tables>
        <template v-slot:head>
          <th v-for="(index) in head" :key="index">{{ index }}</th>
          <th></th>
        </template>
        <template v-slot:body>
          <tr v-for="(row,rowIndex) in body" :key="rowIndex">
            <td v-for="(cell,cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            <td>
              <button class="btn btn-primary">Home</button>
            </td>
          </tr>
        </template>
      </tables>
    </ReusableContainer>
  </div>
</template>

<script setup>
import ReusableContainer from "@/components/container/ReusableContainer.vue";
import GaugeChart from "@/components/chart/GaugeChart.vue";
import ProgressChart from "@/components/chart/ProgressChart.vue";
import Tables from "@/components/table/Tables.vue";
import {computed} from "vue";

const data = [
  {
    name: "Assesment Katodik",
    fields: "Pipeline",
    engineer: "Arlan Budiman",
    target: 18,
    review: 10,
    finish: 7
  },
  {
    name: "Assesment FMECA",
    fields: "Mechanical",
    engineer: "Taufik Iskandar",
    target: 7,
    review: 1,
    finish: 5
  },
  {
    name: "Assesment RBI",
    fields: "Process",
    engineer: "Wahid Habib",
    target: 12,
    review: 4,
    finish: 10
  },
  {
    name: "Assesment Bak Valve",
    fields: "Civil",
    engineer: "Ahmad Rifai",
    target: 48,
    review: 5,
    finish: 48
  }, {
    name: "Assesment Katodik",
    fields: "Pipeline",
    engineer: "Arlan Budiman",
    target: 18,
    review: 10,
    finish: 7
  },
  {
    name: "Assesment FMECA",
    fields: "Mechanical",
    engineer: "Taufik Iskandar",
    target: 7,
    review: 1,
    finish: 5
  },
  {
    name: "Assesment RBI",
    fields: "Process",
    engineer: "Wahid Habib",
    target: 12,
    review: 4,
    finish: 10
  },
  {
    name: "Assesment Bak Valve",
    fields: "Civil",
    engineer: "Ahmad Rifai",
    target: 48,
    review: 5,
    finish: 48
  }, {
    name: "Assesment Katodik",
    fields: "Pipeline",
    engineer: "Arlan Budiman",
    target: 18,
    review: 10,
    finish: 7
  },
  {
    name: "Assesment FMECA",
    fields: "Mechanical",
    engineer: "Taufik Iskandar",
    target: 7,
    review: 1,
    finish: 5
  },
  {
    name: "Assesment RBI",
    fields: "Process",
    engineer: "Wahid Habib",
    target: 12,
    review: 4,
    finish: 10
  },
  {
    name: "Assesment Bak Valve",
    fields: "Civil",
    engineer: "Ahmad Rifai",
    target: 48,
    review: 5,
    finish: 48
  }, {
    name: "Assesment Katodik",
    fields: "Pipeline",
    engineer: "Arlan Budiman",
    target: 18,
    review: 10,
    finish: 7
  },
  {
    name: "Assesment FMECA",
    fields: "Mechanical",
    engineer: "Taufik Iskandar",
    target: 7,
    review: 1,
    finish: 5
  },
  {
    name: "Assesment RBI",
    fields: "Process",
    engineer: "Wahid Habib",
    target: 12,
    review: 4,
    finish: 10
  },
  {
    name: "Assesment Bak Valve",
    fields: "Civil",
    engineer: "Ahmad Rifai",
    target: 48,
    review: 5,
    finish: 48
  }, {
    name: "Assesment Katodik",
    fields: "Pipeline",
    engineer: "Arlan Budiman",
    target: 18,
    review: 10,
    finish: 7
  },
  {
    name: "Assesment FMECA",
    fields: "Mechanical",
    engineer: "Taufik Iskandar",
    target: 7,
    review: 1,
    finish: 5
  },
  {
    name: "Assesment RBI",
    fields: "Process",
    engineer: "Wahid Habib",
    target: 12,
    review: 4,
    finish: 10
  },
  {
    name: "Assesment Bak Valve",
    fields: "Civil",
    engineer: "Ahmad Rifai",
    target: 48,
    review: 5,
    finish: 48
  },
];

const target = data.map(item => item.target);
const finish = data.map(item => item.finish);


const progressData = [
  {
    title: "Rutin",
    target: target.reduce((acc, curr) => acc + curr, 0),
    finish: finish.reduce((acc, curr) => acc + curr, 0),
  },
  {
    title: "Non Rutin",
    target: 45,
    finish: 10,
  },
  {
    title: "PAPP",
    target: 8,
    finish: 2,
  }
];

const progressTitle = progressData.map(item => item.title);
const progressTarget = progressData.map(item => item.target);
const progressFinish = progressData.map(item => item.finish);

const head = Object.keys(data[0]);
const body = data.map(item => Object.values(item));

function calculatedDaysElapsed() {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const today = new Date();
  const timeElapsed = today - startOfYear;
  return Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
}

const dayElapsed = calculatedDaysElapsed();
const expectedPercentage = ((dayElapsed / 365) * 100).toFixed(2);

const targetSum = progressTarget.reduce((acc, curr) => acc + curr, 0);
const finishSum = progressFinish.reduce((acc, curr) => acc + curr, 0);

const nowPercentage = ((finishSum / targetSum) * 100);

const deviation = (nowPercentage - expectedPercentage).toFixed(2);

const deviationColor = computed(() => {
  return deviation >= 0 ? "#77D66E" : "#C26060";
});


</script>

<style scoped>

</style>