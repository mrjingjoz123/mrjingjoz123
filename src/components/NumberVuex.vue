<template>
  <div class="number">
    <b-row>
      <b-col
        ><b-form-input
          id="input-number"
          type="number"
          v-model="number"
        ></b-form-input
      ></b-col>
      <b-col
        ><b-button variant="success" @click="plus">+</b-button>
        <b-button variant="danger" @click="minus">-</b-button></b-col
      >
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Number',
  data () {
    return {
    }
  },
  computed: {
    number () {
      return this.$store.state.number
    }
  },
  methods: {
    ...mapActions([
      'plus',
      'minus'
    ])
    // plus () {
    //   this.$store.dispatch('plus')
    // },
    // minus () {
    //   this.$store.dispatch('minus')
    // }
  }
}
</script>
