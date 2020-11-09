<template>
  <FieldGroup>
    <Label>{{ labelString }}</Label>
    <div :class="{'w-right': !!this.$slots.right}">
      <div class="left-part">
        <div class="num-input" :data-sign="sign">
          <currency-input
            class="num-input__el"
            :class="{ 'is-selected': $attrs.value }"
            v-bind="$attrs"
            v-on="parentListeners"
          />
        </div>
        <slot />
      </div>
      <div class="right-part">
        <slot name="right"></slot>
      </div>
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
    sign: {
      type: String,
      default: '€'
    },
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
.w-right {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  .left-part {
    flex: 1;
    min-width: 200px;
  }

  .right-part {
    flex: 1;
    margin-left: 4px;
    min-width: 200px;

    &::v-deep .vs__dropdown-toggle {
      padding: 0 0 7px 0;
    }
  }

    &::v-deep .field-group {
    margin: 0;
  }
}
.num-input {
  position: relative;

  &::after {
    position: absolute;
    content: attr(data-sign);
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  &__el {
    width: 100%;
    border: 3px solid $c-border;
    border-radius: 10px;
    padding: 10px 40px 10px 10px;
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
