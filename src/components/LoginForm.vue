<template>
  <div
    class="bg-guardsman-red-800 shadow-inner border border-california-200 rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col text-trinidad-500 space-y-4"
  >
    <form @submit="checkForm">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username/E-Mail
        </label>
        <input
          class="shadow-xl  text-xs appearance-none border rounded w-full py-2 px-3 text-black-pearl-500 mb-3"
          id="username"
          type="text"
          v-model="username"
          placeholder="Username"
        />
        <p class="text-red text-xs italic">{{ error.username }}</p>
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow-xl text-xs appearance-none border border-red rounded w-full py-2 px-3 text-black-pearl-500 mb-3"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-red text-xs italic">{{ error.password }}</p>
      </div>
      <div class="flex items-center justify-between space-x-5">
        <button
          type="submit"
          value="Submit"
          class="bg-black-pearl-500 hover:bg-grenadier-700 font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        <a class="font-bold text-sm hover:text-grenadier text-center" href="#">
          Forgot Password?
        </a>
      </div>
      <div class="flex flex-row items-center justify-end">
        <router-link
          class="font-light text-sm hover:text-grenadier"
          :to="{ name: 'Register' }"
          >Register</router-link
        >
      </div>
      <p class="text-red text-xs italic">{{ error.server }}</p>
    </form>
  </div>
</template>
<script>
const cryptoJS = require('crypto-js')
export default {
  data () {
    return {
      username: '',
      password: '',
      error: {
        password: ' ',
        username: ' ',
        server: ''
      },
      loginId: ''
    }
  },
  mounted () {
    this.loginId = Math.random()
      .toString(36)
      .substr(2)
  },
  methods: {
    checkForm: function (submitEvent) {
      submitEvent.preventDefault()
      if (this.username && this.password) {
        this.login()
      }
      this.error.username = ''
      this.error.password = ''
      if (!this.username) {
        this.error.username = 'Username required.'
      }
      if (!this.password) {
        this.error.password = 'Password required.'
      }
    },
    login () {
      if (this.loading) {
        return
      }
      this.loading = true
      const url = 'http://localhost:4000/user/login'
      this.authenticate(url)
    },
    async authenticate (url) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          password: cryptoJS.MD5(this.password + this.username).toString(),
          loginId: this.loginId,
          username: this.username
        })
      })
      const responseMessage = await response.json()
      this.loading = false
      // if (response.status !== 200) {
      this.error.server = responseMessage
      // }
    }
  }
}
</script>
