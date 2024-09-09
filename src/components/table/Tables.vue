<script setup>

</script>

<template>

  <div class="container-fluid tbl-fixed p-0">
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <slot name="head"/>
      </tr>
      </thead>
      <tbody>
      <slot name="body"/>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
.tbl-fixed {
  overflow: auto;
  scrollbar-width: thin;
}
</style>