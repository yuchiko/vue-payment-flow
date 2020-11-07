<template>
  <button
    class="button"
    :class="{
      'button--icon': !label,
      'boxed': direction !== 'left',
    }"
    v-on:click="$emit('click', $event)"
  >
    <ArrowIcon v-if="!label" :class="{'right-arrow': direction == 'right'}" />
    <span v-else v-html="label"></span>
  </button>
</template>

<script>
import ArrowIcon from "@/assets/icons/arrow.svg?inline";

export default {
  name: "NavigationButton",
  components: { ArrowIcon },
  props: {
    label: String,
    direction: {
      validator: function(value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
}

.button {
  display: inline-block;
  border: 0;
  background: none;
  padding: 0;
  line-height: 1;

  &--icon {
    font-size: 0;

    &.boxed svg > * {
      fill: white;
    }

    &:not(.boxed):focus svg > *,
    &:not(.boxed):hover svg > * {
      fill: $c-secondary;
    }
  }

  &:not(.boxed):focus {
    outline: none;
  }

  &.boxed {
    padding: 15px 20px;
    background: $c-secondary;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: $fw-medium;
    color: white;
    border-radius: 10px;
    min-width: 125px;
  }
}

.right-arrow {
  transform: rotate(180deg);
}
</style>
