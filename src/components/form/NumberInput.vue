<template>
  <FieldGroup>
    <Label>{{ labelString }}</Label>
    <div class="num-input">
      <currency-input
        class="num-input__el"
        :class="{ 'is-selected': $attrs.value }"
        v-bind="$attrs"
        v-on="parentListeners"
      />
    </div>
  </FieldGroup>
</template>

<script>
import Label from "./Label";
import FieldGroup from "./FieldGroup";

export default {
  name: "NumberInput",
  props: {
    labelString: String,
  },
  components: { Label, FieldGroup },
  computed: {
    parentListeners: function() {
      // var vm = this;
      return Object.assign({}, this.$listeners);
    },
  },
};
</script>

<style scoped lang="scss">
.num-input {
  position: relative;

  &::after {
    position: absolute;
    content: '€';
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  &__el {
    width: 100%;
    border: 3px solid $c-border;
    border-radius: 10px;
    padding: 10px 40px;
    text-align: right;

    &.is-selected {
      background: rgba(219, 219, 219, 0.4);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
