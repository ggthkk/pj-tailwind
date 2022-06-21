<template>
  <div class="flex-1">
    <div class="grid place-items-center h-auto">
      <div class="w-9/12 m-5 rounded overflow-hidden shadow-lg">
        <div class="px-2 py-4">
          <div class="font-bold text-2xl mb-4 text-center">
            Welcome to my web
          </div>
          <p class="text-gray-700 text-base text-center py-3">
            Develop with vue framework , tailwind css
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Input someting</label
            >
            <input
              type="text"
              v-model="input1"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            @click="conv()"
          >
            Button
          </button>
          <p>
          UUID :
          {{ uuidHash }}
          </p>
          <p>MD5 :
          {{ md5con }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const getUuid = require('uuid-by-string');
const md5 = require('md5');
export default {
  data() {
    const uuidHash = '';
    
    return {
      input1:'',
      uuidHash,
      md5con:'',
    };
  },
  methods: {
    conv() {
      this.uuidHash = getUuid(this.input1);
      this.md5con = md5(this.uuidHash)
    }
  },
};
</script>

<style lang="scss" scoped></style>
