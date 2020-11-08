<template>
  <div class="tabs">
    <h2 class="tabs__heading">
      {{tabHeading}}
    </h2>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
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
  .tabs__heading {
    border-bottom: 2px solid;
    font-size: 30px;
    font-weight: $fw-medium;
    color: $c-primary;
  }
</style>
