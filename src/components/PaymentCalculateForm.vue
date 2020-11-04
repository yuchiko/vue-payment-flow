<template>
  <div>
    <h1 class="h1">Pay-per-use Financing</h1>
    <Steps :step="step" />
  </div>
</template>

<script>
import Steps from './Steps';

export default {
  name: 'PaymentCalculateForm',
  components: { Steps },
  props: {
    step: Number
  }
}
</script>

<style scoped lang="scss">
  .h1 {
    font-family: Roboto;
    font-size: 50px;
    font-style: normal;
    font-weight: $fw-bold;
    line-height: 1.18;
    letter-spacing: 0;
    text-align: left;
    color: $c-black;
  }
</style>
