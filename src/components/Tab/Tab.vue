<template>
  <div class="tab">
    <h2 class="tab__heading">{{tabHeading}}</h2>
    <component :is="tabs[stepIndex].tabComponent" />
  </div>
</template>

<script>

export default {
  name: 'Tab',
  props: {
    step: Number,
    tabs: Array
  },
  computed: {
    // helper function to work with array from 0 index
    stepIndex() {
      return this.step - 1;
    },
    tabHeading() {
      return this.tabs[this.stepIndex].heading ? this.tabs[this.stepIndex].heading : this.tabs[this.stepIndex].label
    }
  }
}
</script>

<style scoped lang="scss">
  .tab {
    &__heading {
      border-bottom: 2px solid;
      font-size: 30px;
      font-weight: $fw-medium;
      color: $c-primary;
    }
  }
</style>
