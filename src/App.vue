<template>
  <div class="app" id="app">
    <div class="app__container">
      <PaymentCalculateForm :step="step"/>
    </div>
  </div>
</template>

<script>
import PaymentCalculateForm from './components/PaymentCalculateForm.vue'

export default {
  name: 'App',
  components: {
    PaymentCalculateForm
  },
  data(){
    return {
      step: 2
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-primary;
  font-size: 25px;
  line-height: 1.172;
}

.app {
  &__container {
    padding: 40px 30px;
  }
}
</style>
