<template>
  <div class="home">
    <b-container>
      <b-row>
        <Number></Number>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Number from '@/components/Number.vue'

export default {
  name: 'Home',
  components: {
    Number
  }
}
</script>
