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
export default {
  name: 'Number',
  data () {
    return {
      number: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  watch: {
    value (v) {
      this.number = v
    }
  },
  methods: {
    plus () {
      this.number++
      this.$emit('valueChange', this.number)
    },
    minus () {
      if (this.number === 0) return
      this.number--
      this.$emit('valueChange', this.number)
    }
  }
}
</script>
