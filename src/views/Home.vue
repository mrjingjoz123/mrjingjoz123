<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <Number @valueChange="valueChange"></Number>
        </b-col>
        <b-col>
          {{ number }}
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <NumberVuex></NumberVuex>
        </b-col>
        <b-col>
          {{ $store.state.number }}
        </b-col>
      </b-row>
      <b-row>
        <b-table striped hover :items="items"></b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Number from '@/components/Number.vue'
import NumberVuex from '../components/NumberVuex.vue'

export default {
  name: 'Home',
  data () {
    return {
      number: 0,
    }
  },
  components: {
    Number,
    NumberVuex
  },
  methods: {
    valueChange (value) {
      this.number = value
    }
  },
  computed: {
    items () {
      return this.$store.state.log
    }
  }
}
</script>
