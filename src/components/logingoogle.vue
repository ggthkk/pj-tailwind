<template>
  <div>
    <!-- ปุ่ม sign out -->
    <div
      v-if="this.condata != ''"
      class="px-5 py-2.5 text-center inline-flex absolute top-0 right-0 mr-2 mb-2"
    >
      <p class="pr-2 py-2">Welcome {{ this.condata.given_name }} !</p>
      <button
        class="rounded-full overflow-hidden border-2 border-purple-500 w-10 h-10 right-0 | hover:border-white focus:outline-none focus:border-white"
        @click="isOpen1 = true"
      >
        <img :src="this.condata.picture" alt="User's avatar" />
      </button>

      <div
        v-if="isOpen1"
        class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
        @click="isOpen1 = false"
      ></div>
      <div
        v-if="isOpen1"
        class="absolute z-30 right-6 mt-11"
        :class="{ hidden: !isOpen1 }"
      >
        <div class="bg-white rounded-lg shadow-lg py-2 w-48">
          <a
            href=""
            class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500"
            >Your profile</a
          >
          <a
            @click="toggleModal()"
            class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500"
            >Sign out</a
          >
        </div>
      </div>
    </div>
    <!-- ปุ่ม sign out -->

    <!-- ปุ่ม sign in -->
    <div v-else>
      <button
        type="button"
        id="signin_button"
        class="bg-whit focus:ring-4 focus:outline-none font-medium rounded-lg px-2 py-2 mr-3 text-center inline-flex absolute top-2 right-0"
      ></button>
    </div>
    <!-- ปุ่ม sign in -->

    <!-- modal confriem -->
    <div>
      <div
        v-if="showModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      >
        <div class="relative w-auto my-2 mx-auto max-w-md">
          <!--content-->
          <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <!--header-->
            <div
              class="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t"
            >
              <h3 class="text-lg font-semibold">Sign Out</h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="toggleModal()"
              >
                <span
                  class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                  >×
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-4 flex-auto">
              Are you sure you want to Sing out?
            </div>
            <!--footer-->
            <div
              class="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b"
            >
              <button
                class="text-red-500 mr-2 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-7 py-2.5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                @click="toggleModal()"
              >
                No
              </button>
              <button
                class="text-red-500 background-transparent font-bold uppercase px-7 py-2 mr-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                @click="signout()"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal"
        class="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
    <!-- modal confriem -->
  </div>
</template>

<script>
import googleOneTap from 'google-one-tap';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export default {
  methods: {
    logingoogle() {
      const options = {
        client_id:
          '275232413742-pid0tljujbo4dfpro2gk93pufuedgrs1.apps.googleusercontent.com', // required
        auto_select: false, // optional
        cancel_on_tap_outside: false, // optional
        context: 'signin', // optional
        state_cookie_domain: 'localhost:8080',
      };
      googleOneTap(options, (response) => {
        // Send response to server
        console.log(response);
        var userData = jwt_decode(response.credential);
        console.log('Handle the userData', userData);
        console.log('username : ', userData.given_name);
        this.name = userData.given_name;
        this.pictureshow = userData.picture;

        Cookies.set('data', JSON.stringify(userData), { expires: 1 });

        //รับ cookie และแปลง หลัง login
        this.getdata = Cookies.get('data');
        this.condata = JSON.parse(this.getdata);

        //รับ cookie และแปลง หลัง login

        this.$emit('logingoogle', '1');

      });
    },

    //getdataAipGooogle
    handleCredentialResponse(response) {
      console.log(response);
      var userData = jwt_decode(response.credential);
      console.log('Handle the userData', userData);
      console.log('username : ', userData.given_name);
      this.name = userData.given_name;
      this.pictureshow = userData.picture;

      Cookies.set('data', JSON.stringify(userData), { expires: 1 });

      //รับ cookie และแปลง หลัง login
      this.getdata = Cookies.get('data');
      this.condata = JSON.parse(this.getdata);
      //รับ cookie และแปลง หลัง login

      this.$emit('logingoogle', '1');
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },
    signout:function (){
      Cookies.remove('data');
      this.$router.go();
    },
    getCookie() {
      const getdataFrist = Cookies.get('data');
      const condataFrist = JSON.parse(getdataFrist);

      console.log("frist",condataFrist);
      console.log("frist",condataFrist.name);

      this.condata = condataFrist
    },
  },

  data() {
    return {
      name: '',
      pictureshow: '',
      showModal: false,
      isOpen1: false,
      isOpen2: false,
      getdata: '',
      condata:''
    };
  },

  mounted: function () {
    let googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    document.head.appendChild(googleScript);

    window.addEventListener('load', () => {
      console.log(window.google);
      window.google.accounts.id.initialize({
        client_id:
          '275232413742-pid0tljujbo4dfpro2gk93pufuedgrs1.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('signin_button'),
        { theme: 'filled_blue', size: 'medium', text: 'continue_with' } // customization attributes
      );
    });
  },
  created() {
    if (Cookies.get('data') === undefined) {
        this.logingoogle();
    } else {
      this.getCookie();
      this.$emit('logingoogle', '1');
    }
  },
};
</script>

<style lang="scss" scoped></style>
