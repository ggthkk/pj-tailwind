<template>
  <div class="grid place-items-center h-auto">
    <div class="w-9/12 m-5 rounded overflow-hidden shadow-lg">
      <div class="px-2 py-4">
        <div class="font-bold text-2xl mb-4">Api option Watch</div>
        <p class="text-gray-700 text-base">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >ใส่น้ำหนัก</label
          >
          <input
            type="text"
            v-model="a"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: '',
    };
  },
  watch: {
    a(value) {
      if (value >= 200) {
        setTimeout(() => {
          alert('น้ำหนักเกิน');
          this.a = 0;
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
