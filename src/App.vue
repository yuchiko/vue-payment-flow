<template>
  <div class="app" id="app">
    <div class="app__container">
      <PaymentCalculateForm />
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
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
