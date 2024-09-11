<script setup>
import ReusableContainer from "@/components/container/ReusableContainer.vue";
import Tables from "@/components/table/Tables.vue";
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import GaugeChart from "@/components/chart/GaugeChart.vue";
import ProgressChart from "@/components/chart/ProgressChart.vue";


const rutinData = ref([]);
const nonRutinData = ref([]);

const fetchRutin = async () => {
  try {
    const responseRutin = await axios.get("http://localhost:5000/rutin");
    rutinData.value = responseRutin.data;

  } catch (error) {
    console.log(error);
  }

};

const fetchNonRutin = async () => {
  try {
    const responseNonRutin = await axios.get("http://localhost:5000/nonrutin");
    nonRutinData.value = responseNonRutin.data;
  } catch (error) {
    console.log(error);
  }
};

const headRutin = ["No", "Judul Pekerjaan", "Engineer", "Status", "Action"];
const headNonRutin = ["No", "Uraian", "Area", "Project", "Pelaksana", "Engineer", "Status", "Jenis Dokumen", "Jatuh Tempo", "Selesai", "Nilai", "Action"];


onMounted(() => {
  fetchRutin();
  fetchNonRutin();
});


const processedDataRutin = computed(() => {
  return rutinData.value.map(item => {
    let status = "";
    let badge = "";


    if (item.isCreate) {
      status = "Review External";
      badge = "text-bg-info";
    }

    if (item.isCheckedByExternal) {
      status = "Review RRIM";
      badge = "text-bg-warning";
    }
    if (item.isCheckedByInternal) {
      status = "Approve";
      badge = "text-bg-success";
    }

    return {
      id: item.id,
      name: item.name,
      pic: item.pic,
      status: status,
      badge: badge
    };
  });
});

const processedDataNonRutin = computed(() => {
  return nonRutinData.value.map(item => {
    let status = "";
    let badge = "";


    if (item.isCreate) {
      status = "Review External";
      badge = "text-bg-info";
    }

    if (item.isCheckedByExternal) {
      status = "Review RRIM";
      badge = "text-bg-warning";
    }
    if (item.isCheckedByInternal) {
      status = "Approve";
      badge = "text-bg-success";
    }

    return {
      id: item.id,
      uraian: item.uraian,
      area: item.area,
      project: item.project,
      pelaksana: item.pelaksana,
      pic: item.pic,
      status: status,
      badge: badge,
      jenisDokumen: item.jenisDokumen,
      dueDate: item.dueDate,
      createAt: item.createAt,
      nilai: item.nilai
    };
  });
});

const titleName = ["Rutin", "Non Rutin", "PAPP", "Yestin", "Brembo"];
const progressFinish = [17, 6, 10, 3, 7];
const progressTarget = [18, 8, 12, 17, 6];

const finishValue = progressFinish.reduce((acc, curr) => acc + curr, 0);
const targetValue = progressTarget.reduce((acc, curr) => acc + curr, 0);


const currentDate = new Date();
const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
const timeDifference = currentDate - startOfYear;

const dayPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const expectedPercentage = ((dayPassed / 365) * 100).toFixed(2);
const finishPercentage = ((finishValue / targetValue) * 100).toFixed(2);

const deviation = (finishPercentage - expectedPercentage).toFixed(2);
const deviationColor = deviation <= 0 ? "#C26060" : "#77D66E";

</script>
<template>
  <ReusableContainer :align-middle="true">
    <div class="d-flex grid gap-3 justify-content-evenly align-items-center">
      <div class="h-50">
        <GaugeChart :finish="progressFinish" :target="progressTarget" :size="500"/>

        <div class="d-flex justify-content-evenly">
          <div class="h-50 p-3 bg-body-tertiary rounded-3">
            <h5>Target : {{ expectedPercentage }}%</h5>
          </div>

          <div class="h-50 p-3 bg-body-tertiary rounded-3">
            <h5>Deviasi: <span :style="{color:deviationColor}">{{ deviation }}%</span></h5>
          </div>
        </div>

      </div>


      <div class="h-50 d-flex justify-content-center align-items-center">
        <ProgressChart :title="titleName" :finish="progressFinish" :target="progressTarget" :size="500"/>
      </div>

    </div>
  </ReusableContainer>

  <div class="mt-3 gap-3 d-flex flex-row">
    <div class="w-50">
      <ReusableContainer name="Rutin dan PAPP" :height="500">
        <!--Table Rutin-->
        <tables>
          <!--Head table Rutin-->
          <template v-slot:head>
            <th v-for="(index) in headRutin" :key="index">{{ index }}</th>
          </template>

          <!--Body table Rutin-->
          <template v-slot:body>
            <tr v-for="(row,rowIndex) in processedDataRutin" :key="rowIndex">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td>{{ row.pic }}</td>
              <td><span class="badge rounded-pill" :class="row.badge">{{ row.status }}</span></td>
              <td>
                <button class="btn-icon"><img alt="view" src="@/assets/eye.svg"></button>
              </td>
            </tr>
          </template>
        </tables>
      </ReusableContainer>
    </div>

    <div class="w-50">
      <ReusableContainer name="Non Rutin" :height="500">
        <!--Table Non Rutin-->
        <tables>
          <!--Head table non Rutin-->
          <template v-slot:head>
            <th v-for="(index) in headNonRutin" :key="index">{{ index }}</th>
            <th></th>
          </template>

          <!--Body table non Rutin-->
          <template v-slot:body>
            <tr v-for="(row,rowIndex) in processedDataNonRutin" :key="rowIndex">
              <td>{{ row.id }}</td>
              <td class="col-12">{{ row.uraian }}</td>
              <td class="">{{ row.area }}</td>
              <td>{{ row.project }}</td>
              <td>{{ row.pelaksana }}</td>
              <td>{{ row.pic }}</td>
              <td><span class="badge rounded-pill" :class="row.badge">{{ row.status }}</span></td>
              <td>{{ row.jenisDokumen }}</td>
              <td>{{ row.dueDate }}</td>
              <td>{{ row.createAt }}</td>
              <td>{{ row.nilai }}</td>
              <td>
                <button class="btn-icon"><img alt="view" src="@/assets/eye.svg"></button>
              </td>
            </tr>
          </template>
        </tables>
      </ReusableContainer>
    </div>
  </div>
</template>


<style scoped>

.btn-icon {
  background: none;
  border: none;
}

.btn-icon img {
  width: 16px;
}

</style>