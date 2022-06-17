<template>
  <div>
    <main></main>

  </div>
</template>

<script>
import main from '../components/Main.vue';
import apidata from './Api_data.vue';

export default {
  name: 'Home',
  components: {
    main,
    apidata,
  },
};
</script>
