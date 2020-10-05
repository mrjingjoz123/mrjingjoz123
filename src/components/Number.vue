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
        ><b-button variant="success">+</b-button>
        <b-button variant="danger">-</b-button></b-col
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
  }
}
</script>
