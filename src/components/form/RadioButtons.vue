<template>
  <FieldGroup>
    <Label>{{labelString}}</Label>
    <template v-for="(option, index) in options">
      <div class="radio" :key="option.value + index">
        <input
          class="custom-radio"
          type="radio"
          :id="'color-1-' + option.value"
          :name="option.value"
          :value="option.value"
          :checked="option.value === checkedValue"
          v-bind="$attrs" v-on="parentListeners"
        />
        <label :for="'color-1-' + option.value">{{option.label}}</label>
      </div>
    </template>
  </FieldGroup>
</template>

<script>
import Label from "./Label";
import FieldGroup from "./FieldGroup";

export default {
  name: "RadioButtons",
  props: {
    labelString: String,
    checkedValue: String,
    options: Array
  },
  components: {Label, FieldGroup},
  computed: {
    parentListeners: function() {
      // var vm = this;
      return Object.assign({}, this.$listeners);
    },
  },
};
</script>

<style computed lang="scss">
.radio {
  position: relative;
  margin-bottom: 0.4em;
}

.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & + label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $c-checkbox;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    box-sizing: content-box;
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }

  &:not(:disabled):active + label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }

  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
  }

  &:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }

  &:checked + label::before {
    border-color: $c-checkbox;
    background-color: $c-checkbox;
  }

  &:checked + label::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    background: white;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:disabled + label::before {
    background-color: #e9ecef;
  }
}
</style>
