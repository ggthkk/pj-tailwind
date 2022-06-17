<template>
  <div class="relative flex min-h-screen">
    <sidebar></sidebar>
    <div class="flex-1">
      <haed></haed>
      <router-view />
    </div>
  </div>
</template>

<script>
import sidebar from './components/Sidebar.vue'
import haed from './components/Haed.vue'

export default {
  name: "Home",
  components: {
    sidebar,
    haed,
  },
};
</script>

<style>

</style>
