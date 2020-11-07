<template>
  <div class="nav">
    <template v-if="step == 1">
      <NavigationButton direction="left" />
    </template>
    <template v-else-if="step > 1 && step < lastStep">
      <NavigationButton direction="left" />
      <NavigationButton direction="right" />
    </template>
    <template v-else>
      <NavigationButton class="m-l-auto" label="Calculate" />
    </template>
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
