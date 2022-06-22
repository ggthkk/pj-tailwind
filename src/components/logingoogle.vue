<template>
  <div>
    <!-- ปุ่ม sign out -->
    <button v-if="this.name != ''"
      type="button"
      @click="toggleModal()"
      class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex absolute top-3 right-0 mr-2 mb-2"
    >
      <svg
        v-if="pictureshow === ''"
        class="w-4 h-5 mr-2 -ml-1"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>

      <img
        v-else
        class="w-6 h-6 rounded-full mr-2 -ml-2"
        :src="pictureshow"
        alt="Default avatar"
      />

      <p v-if="this.name == ''">Sign in with Google</p>
      <p v-if="this.name != ''">{{ name }}</p>
    </button>
    <!-- ปุ่ม sign out -->

    <!-- ปุ่ม sign in -->
    <button v-if="this.name === ''"
      type="button"
      id="signin_button"
      class="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2 mr-8 text-center inline-flex absolute top-3 right-0 "
    >
    </button>
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
                @click="reload()"
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
        console.log('username : ', userData.name);
        this.name = userData.name;
        this.pictureshow = userData.picture;

        this.$emit('logingoogle', '1');
      });
    },

    //getdataAipGooogle
    handleCredentialResponse(response) {
      console.log(response);
      var userData = jwt_decode(response.credential);
        console.log('Handle the userData', userData);
        console.log('username : ', userData.name);
        this.name = userData.name;
        this.pictureshow = userData.picture;

        this.$emit('logingoogle', '1');

    },

    toggleModal() {
      this.showModal = !this.showModal;
    },
    reload() {
      this.$router.go();
    },
  },

  data() {
    return {
      name: '',
      showModal: false,
      pictureshow: '',
    };
  },

  mounted: function () {
    let googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    document.head.appendChild(googleScript);

    window.addEventListener('load', () => {
      console.log(window.google);
      window.google.accounts.id.initialize({
        client_id: '275232413742-pid0tljujbo4dfpro2gk93pufuedgrs1.apps.googleusercontent.com',
        callback: this.handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('signin_button'),
        { theme: 'outline', size: 'medium' , text:'continue_with',shape:'pill'} // customization attributes
      );
    });
  },
};
</script>

<style lang="scss" scoped></style>
