<script setup>

import ReusableContainer from "@/components/container/ReusableContainer.vue";
import ProgressChart from "@/components/chart/ProgressChart.vue";
import GaugeChart from "@/components/chart/GaugeChart.vue";
import Tables from "@/components/table/Tables.vue";
</script>

<template>
  <div class="d-flex grid gap-3">
    <ReusableContainer name="Kinerja Total" :align-middle="true">
      <div>

      </div>
    </ReusableContainer>

    <div class="d-flex grid gap-3 flex-column">
      <ReusableContainer name="Kinerja Dokumen" :width="458" :height="458">
        <div>

        </div>
      </ReusableContainer>
      <ReusableContainer name="Kinerja Dokumen" :height="458" :width="458">
        <div>

        </div>
      </ReusableContainer>
    </div>
  </div>
</template>

<style scoped>

</style>