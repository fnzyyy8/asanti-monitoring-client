<script setup>

</script>

<template>

  <div class="tbl-fixed mw-100">
    <div class="mh-100">
        <table class="table table-responsive table-striped">
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
  </div>

</template>

<style scoped>
.tbl-fixed {
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>