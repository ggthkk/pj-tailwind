<template>
  <div class="grid place-items-center h-auto">
    <div class="w-11/12 m-5 rounded overflow-hidden shadow-lg">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-4">ID</th>
              <th scope="col" class="px-6 py-4">First_name</th>
              <th scope="col" class="px-6 py-4">Last_name</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Picture</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(getuser,index) in user" :key="index" >
              <th
                scope="row"
                class="px-4 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {{ getuser.id }}
              </th>
              <td class="px-4 py-2">{{ getuser.first_name }}</td>
              <td class="px-4 py-2">{{ getuser.last_name }}</td>
              <td class="px-4 py-2">{{ getuser.email }}</td>
              <td class="px-4 py-2 text-right"> <img :src="getuser.avatar" alt="">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            user: []
        }
    },
    methods: {
        getUser() {
            const URL = "https://reqres.in/api/users?page=2"
            this.axios.get(URL).then(res => {
                this.user = res.data.data
                console.log(res.data);
            })
        }
    },
    mounted () {
        this.getUser();
    },
};
</script>

<style lang="scss" scoped></style>
