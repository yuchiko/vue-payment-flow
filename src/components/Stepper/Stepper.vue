<template>
  <div class="stepper">
    <template v-for="(tab, index) in tabs">
      <StepperItem  
        :label="tab.label" 
        :key="tab.label" 
        :icon="tab.icon"
        :step-index="index+1"
        :is-active="index+1 <= step"
        v-on:stepper-item-click="handleStepperClick" />
      <span v-if="index < tabs.length - 1" class="stepper__divider" :key="tab.label + '-label'"></span>
    </template>
  </div>
</template>

<script>
import StepperItem from "./StepperItem";

export default {
  name: 'Stepper',
  components: {StepperItem},
  props: {
    step: Number,
    tabs: Array
  },
  methods: {
    handleStepperClick({isActive, stepIndex}) {
      this.$emit('stepper-click', {isActive, stepIndex})
    }
  }
}
</script>

<style scoped lang="scss">
  .stepper {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 90px;

    &__divider {
      flex: 1;
      height: 5px;
      background: $c-primary;
      border-radius: 15px;
      margin-top: 25px;
      // margin-left: 2px;
      // margin-right: 2px;
    }
  }
</style>
