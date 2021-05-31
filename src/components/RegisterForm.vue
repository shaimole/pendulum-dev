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
          Username
        </label>
        <input
          class="shadow-xl text-xs appearance-none border rounded w-full py-2 px-3 text-black-pearl-500 mb-3"
          id="username"
          type="text"
          v-model="username"
          placeholder=" Please enter your username"
        />
        <p class="text-red text-xs italic">{{ error.username }}</p>
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="email"
        >
          E-Mail
        </label>
        <input
          class="shadow-xl text-xs ppearance-none border rounded w-full py-2 px-3 text-black-pearl-500 mb-3"
          id="email"
          type="text"
          v-model="email"
          placeholder="Please enter your E-mail"
        />
        <p class="text-red text-xs italic">{{ error.email }}</p>
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
          placeholder="Please enter your password"
          v-model="password"
        />
        <p class="text-red text-xs italic">{{ error.password }}</p>
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="passwordConfirm"
        >
          Confirm
        </label>
        <input
          class="shadow-xl text-xs appearance-none border border-red rounded w-full py-2 px-3 text-black-pearl-500 mb-3"
          id="confirmPassword"
          type="password"
          placeholder="Please confirm your password"
          v-model="confirmPassword"
        />
        <p class="text-red text-xs italic">{{ error.confirmPassword }}</p>
      </div>
      <div class="mb-6 flex items-center flex-row ">
        <input
          id="terms"
          class="mr-3 form-checkbox text-black-pearl"
          type="checkbox"
          v-model="terms"
        />
        <label
          class=" text-grey-darker text-sm font-bold"
          for="passwordConfirm"
        >
          Accept privacy policy and terms
        </label>
      </div>
      <p class="text-red text-xs italic mb-2">{{ error.terms }}</p>
      <div class="flex items-center justify-between space-x-5">
        <button
          type="submit"
          value="Submit"
          class="bg-black-pearl-500 hover:bg-grenadier-700 font-bold py-2 px-4 rounded"
        >
          Register
        </button>
        <router-link
          class="font-light text-sm hover:text-grenadier"
          :to="{ name: 'Login' }"
          >Back to Login</router-link
        >
      </div>
      <div class="flex flex-row items-center justify-end">
        <p class="text-red text-xs italic">{{ error.server }}</p>
      </div>
    </form>
  </div>
</template>
<script>
const cryptoJS = require('crypto-js')
const apiUrl = 'http://localhost:4000/user/'
export default {
  data () {
    return {
      username: 'x',
      email: 'x@x.x',
      password: 'xxxxxxxx',
      confirmPassword: 'xxxxxxxx',
      terms: true,
      error: {
        password: '',
        confirmPassword: '',
        username: '',
        server: '',
        terms: ''
      }
    }
  },
  watch: {
    email (value) {
      this.email = value
      this.validateEmail(value)
    },
    confirmPassword (value) {
      this.confirmPassword = value
      if (this.confirmPassword !== this.password) {
        this.error.confirmPassword = 'Password does not match.'
        return
      }
      this.error.confirmPassword = ''
    },
    password (value) {
      this.password = value
      this.validatePassword(value)
    },
    username (value) {
      this.username = value
      this.validateUsername(value)
    },
    terms (value) {
      this.terms = value
      this.updateTermsErrorMessage(value)
    }
  },
  methods: {
    updateTermsErrorMessage (value) {
      if (!value) {
        this.error.terms = 'Please accept the terms and privacy policy.'
        return
      }
      this.error.terms = ''
    },
    validateEmail (value) {
      this.error.email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        value
      )
        ? ''
        : 'Invalid Email Address'
    },
    validatePassword (value) {
      this.error.password =
        value.length < 8 ? 'Password must be atleast 8 characters' : ''
    },
    validateUsername (value) {
      this.error.username = ''
      this.checkUsername(value, apiUrl + 'checkusername')
    },
    async checkUsername (username, url) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          username: username
        })
      })
      const parsed = await response.json()
      this.error.username = parsed.message
    },
    checkForm (submitEvent) {
      submitEvent.preventDefault()
      if (this.isFormValid()) {
        this.register()
      }
      this.error.password = ''
      this.error.terms = ''
      this.error.email = ''
      this.error.username = ''
      if (!this.username) {
        this.error.username = 'Username required.'
      }
      if (!this.password) {
        this.error.password = 'Password required.'
      }
      if (!this.email) {
        this.error.email = 'Email required.'
      }
      this.updateTermsErrorMessage(this.terms)
    },
    isFormValid () {
      return (
        !this.error.password &&
        !this.error.username &&
        !this.error.email &&
        this.terms
      )
    },
    register () {
      if (this.loading) {
        return
      }
      this.loading = true
      console.log('go forth')
      this.requestAccount(apiUrl + 'register')
    },
    async requestAccount (url) {
      console.log(url)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          password: cryptoJS.MD5(this.password + this.username).toString(),
          username: this.username,
          email: this.email,
          terms: this.terms
        })
      })
      try {
        this.error.server = await response.json()
      } catch (e) {
        this.error.server = 'Unknown Error'
      }
      this.loading = false
      // if (response.status !== 200) {
      // }
    }
  }
}
</script>
