<template>
  <div>
    <api1></api1>
    <api2></api2>
  </div>
</template>

<script>
import api1 from './Home.vue';
import api2 from './Api_computed.vue';
export default {
  components: {
    api1,
    api2,
  },
};
</script>

<style lang="scss" scoped></style>
