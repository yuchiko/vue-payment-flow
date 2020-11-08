<template>
  <div>
    <h1 class="h1">Pay-per-use Financing</h1>
    <Stepper :step="step" :tabs="tabs" />
    <Navigation 
      :step="step" 
      :last-step="tabs.length" 
      v-on:nav-btn-clicked="handleNavBtnClicked" 
    />
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
  },
  methods: {
    handleNavBtnClicked(btnType) {
      switch (btnType) {
        case 'back':
          this.handleBackClick();
          break;
        case 'next':
          this.handleNextClick();
          break;
        case 'calculate':
          this.handleCalculateClick();
          break;
        default:
          console.error('Unknown button was clicked. Please check btnType property for NavigationButton components.');
          break;
      }
    },
    handleBackClick() {
      return this.step > 1 ? this.step-- : this.step;
    },
    handleNextClick() {
      return this.step < this.tabs.length ? this.step++ : this.step;
    },
    handleCalculateClick() {
      console.log('data send');
    }
  },
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
