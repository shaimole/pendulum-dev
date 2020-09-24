<template>
  <div>
    <b-form-textarea
      id="textarea"
      @keydown="setCharValue({key: 'notes', value: text})"
      v-model="text"
      placeholder="Notizen..."
      rows="20"
      max-rows="30000"
    ></b-form-textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters([
      'getNotes'
    ])
  },
  mounted () {
    this.text = this.getNotes
  },
  methods: {
    ...mapActions([
      'setCharValue'
    ])
  }
}
</script>
