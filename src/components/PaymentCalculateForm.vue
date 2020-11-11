<template>
  <div>
    <h1 class="h1">Pay-per-use Financing</h1>
    <Stepper :step="step" :tabs="tabs" v-on:stepper-click="handleStepperClicked" />
    <Tab :step="step" :tabs="tabs"/>
    <Navigation 
      :step="step" 
      :last-step="tabs.length" 
      v-on:nav-btn-clicked="handleNavBtnClicked"
    />
  </div>
</template>

<script>
import tabsData from '@/data/tabs';
import {eventBus} from '@/main';

// components
import Stepper from './Stepper/';
import Navigation from './Navigation/';
import Tab from './Tab/';

export default {
  name: 'PaymentCalculateForm',
  components: { Stepper, Navigation, Tab },
  data(){
    return {
      step: 1,
      tabs: tabsData,
      nextDisabled: true,
    }
  },
  created () {
    eventBus.$on('step-next-change-verified', () => {
      this.handleNextClick()
    })
  },
  methods: {
    handleNavBtnClicked(btnType) {
      switch (btnType) {
        case 'back':
          this.handleBackClick();
          break;
        case 'next':
          // this.handleNextClick();
          this.verifyNextClick();
          break;
        case 'calculate':
          this.handleCalculateClick();
          break;
        default:
          console.error('Unknown button was clicked. Please check btnType property for NavigationButton components.');
          break;
      }
    },
    verifyNextClick() {
      eventBus.$emit('verify-step-next-change', this.step);
    },
    handleBackClick() {
      return this.step > 1 ? this.step-- : this.step;
    },
    handleNextClick() {
      return this.step < this.tabs.length ? this.step++ : this.step;
    },
    handleCalculateClick() {
      console.log(this.$store.state.paymentForm);
    },
    handleStepperClicked({isActive, stepIndex}) {
      if (isActive) this.step = stepIndex;
    }
  },
}
</script>

<style lang="scss">
  @import "@/components/form/form.scss";
</style>

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
