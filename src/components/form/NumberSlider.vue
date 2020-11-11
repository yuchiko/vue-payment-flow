<template>
  <FieldGroup>
    <Label>{{ labelString }}</Label>
    <div class="slider-input-box" :class="{ 'is-selected': $attrs.value }">
      <vue-slider
        :value="$attrs.value"
        :tooltip="'none'"
        :dot-size="30"
        @dragging="dragSliderHandler"
      />
      <div class="num-input">
        <currency-input
          class="num-input__el"
          :class="{ 'is-selected': $attrs.value }"
          v-bind="$attrs"
          v-on="parentListeners"
          :precision="0"
          :value-range="{ min, max }"
        />
      </div>
    </div>
    <p v-if="errors" class="error-message">{{errors}}</p>
  </FieldGroup>
</template>

<script>
import Label from "./Label";
import FieldGroup from "./FieldGroup";
import VueSlider from "vue-slider-component";

export default {
  name: "NumberSlider",
  data() {
    return {
      min: 0,
      max: 100,
    };
  },
  props: {
    labelString: String,
    errors: String,
  },
  components: { Label, FieldGroup, VueSlider },
  computed: {
    parentListeners: function() {
      // var vm = this;
      return Object.assign({}, this.$listeners);
    },
  },
  methods: {
    dragSliderHandler(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style scoped lang="scss">
.slider-input-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .vue-slider {
    flex: 1 1 65%;
    margin-left: 15px;
    margin-right: 20px;
    height: 10px !important;
  }

  &::v-deep .vue-slider-rail {
    background: $c-primary;
  }

  &::v-deep .vue-slider-process {
    background: $c-secondary;
    background: #8576a5;
  }

  &::v-deep .vue-slider:hover .vue-slider-process {
    background: #8576a5;
  }

  &::v-deep .vue-slider .vue-slider-process {
    background: #8576a5;
  }

  &::v-deep .vue-slider-dot-handle {
    border: 0;
    background: $c-checkbox;
  }

  &.is-selected::v-deep .vue-slider-dot-handle {
    background: $c-secondary;
  }
}

.num-input {
  position: relative;
  flex: 0 1 30%;
  max-width: 150px;

  &::after {
    position: absolute;
    content: "%";
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  &__el {
    width: 100%;
    border: 3px solid $c-border;
    border-radius: 10px;
    padding: 10px 30px 10px 10px;
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
