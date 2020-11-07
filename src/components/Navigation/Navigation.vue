<template>
  <div class="nav" @click="onClickHandler">
    <template v-if="step == 1">
      <NavigationButton class="m-l-auto" direction="right"/>
    </template>
    <template v-else-if="step > 1 && step < lastStep">
      <NavigationButton direction="left"/>
      <NavigationButton direction="right"/>
    </template>
    <template v-else>
      <NavigationButton class="m-l-auto" label="Calculate"/>
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
  methods: {
      onClickHandler() {
          console.log('clicked');
      }
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
