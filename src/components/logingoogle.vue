<template>
  <div>
    <button
      type="button" @click="onSignIn()"
      class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex absolute top-3 right-0 mr-2 mb-2"
    >
      <svg
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
      Sign in with Google
    </button>
  </div>
</template>

<script>
import googleOneTap from 'google-one-tap';
import jwt_decode from "jwt-decode";
export default {
    mounted() {
        const options = {
            client_id: '275232413742-pid0tljujbo4dfpro2gk93pufuedgrs1.apps.googleusercontent.com', // required
            auto_select: false, // optional
            cancel_on_tap_outside: false, // optional
            context: 'signin', // optional
            
        };
        googleOneTap(options, (response) => {
            // Send response to server
            console.log(response);
            var userData = jwt_decode(response.credential);
            console.log("Handle the userData", userData)
        });
    },
    methods: {
    onSignIn (user) {
      const profile = user.getBasicProfile()
    }
}
};
</script>

<style lang="scss" scoped></style>