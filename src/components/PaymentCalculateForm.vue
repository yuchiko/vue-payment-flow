<template>
  <div>
    <h1 class="h1">Pay-per-use Financing</h1>
    <Stepper :step="step" :tabs="tabs" />
    <Navigation :step="step" :last-step="tabs.length"/>
  </div>
</template>

<script>
import tabsData from '@/data/tabs';
import Stepper from './Stepper/';
import Navigation from './Navigation/';

export default {
  name: 'PaymentCalculateForm',
  components: { Stepper, Navigation },
  data(){
    return {
      step: 5,
      tabs: tabsData
    }
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
    padding: 0;
    margin: 0;
  }
</style>
