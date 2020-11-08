<template>
  <div class="nav">
      <NavigationButton v-if="step > 1" direction="left" @click.native="handleButtonClicked('back')" />
      <NavigationButton v-if="step !== lastStep" class="m-l-auto" direction="right" @click.native="handleButtonClicked('next')"/>
      <NavigationButton v-else class="m-l-auto" label="Calculate" @click.native="handleButtonClicked('calculate')"/>
  </div>
</template>

<script>
import NavigationButton from "./NavigationButton";

export default {
  name: "Navigation",   
  components: { NavigationButton },
  props: {
    step: Number,
    lastStep: Number,
  },
  methods: {
      handleButtonClicked(btnType) {
        this.$emit('nav-btn-clicked', btnType);
      },
  }
};
</script>

<style scoped lang="scss">
.nav {
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
}
.m {
  &-l-auto {
    margin-left: auto;
  }
  &-r-auto {
    margin-right: auto;
  }
}
</style>
