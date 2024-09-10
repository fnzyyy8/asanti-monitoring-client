<script setup>
import ReusableContainer from "@/components/container/ReusableContainer.vue";
import Tables from "@/components/table/Tables.vue";
import {computed, onMounted, ref} from "vue";
import axios from "axios";


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

const headRutin = ["No", "Judul Pekerjaan", "Engineer", "Status", "Opsi"];
const headNonRutin = ["No", "Uraian", "Area", "Project", "Pelaksana", "Engineer", "Status", "Jenis Dokumen", "Jatuh Tempo", "Selesai", "Nilai"];


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

</script>
<template>
  <div class="mw-100 mh-100">
    <div class="d-flex grid gap-3">
      <div>
        <ReusableContainer name="Kinerja Total" :align-middle="true">
          <div>
            <!--                    <GaugeChart :finish="progressFinish" :target="progressTarget" :size="400"/>-->
          </div>
        </ReusableContainer>
        <div class="text-center d-flex grid gap-3 mt-3">
          <ReusableContainer :align-middle="true" :width="500">
            <!--          <h5>Target : {{ expectedPercentage }}%</h5>-->
          </ReusableContainer>
          <ReusableContainer :align-middle="true">
            <!--          <h5>Deviasi: <span :style="{color:deviationColor}">{{ deviation }}%</span></h5>-->
          </ReusableContainer>
        </div>
      </div>

      <ReusableContainer name="Kinerja Dokumen" :align-middle="true">
        <div>
          <!--        <ProgressChart :title="progressTitle" :finish="progressFinish" :target="progressTarget" :size="300"/>-->
        </div>
      </ReusableContainer>
    </div>

    <div class="d-flex grid gap-3 mt-3">
      <ReusableContainer name="Rutin dan PAPP" :height="500" :width="1000">
        <tables>
          <template v-slot:head>
            <th v-for="(index) in headRutin" :key="index">{{ index }}</th>
          </template>
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
      <ReusableContainer name="Non Rutin" :height="500" :width="800">
        <tables>
          <template v-slot:head>
            <th v-for="(index) in headNonRutin" :key="index">{{ index }}</th>
            <th></th>
          </template>
          <template v-slot:body>
            <tr v-for="(row,rowIndex) in processedDataNonRutin" :key="rowIndex">
              <td>{{ row.id }}</td>
              <td class="col-3">{{ row.uraian }}</td>
              <td>{{ row.area }}</td>
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