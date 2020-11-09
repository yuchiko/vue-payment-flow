<template>
  <FieldGroup>
    <Label>{{ labelString }}</Label>
    <v-select v-bind="$attrs" v-on="parentListeners">
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <selectIcon />
        </span>
      </template>
    </v-select>
  </FieldGroup>
</template>

<script>
import vSelect from "vue-select";
import selectIcon from "@/assets/icons/select-icon.svg?inline";
import FieldGroup from "./FieldGroup";
import Label from "./Label";

export default {
  name: "Select",
  components: { vSelect, selectIcon, Label, FieldGroup },
  props: {
    labelString: String,
  },
  computed: {
    parentListeners: function() {
      // var vm = this;
      return Object.assign({}, this.$listeners);
    },
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.vs {
  &__dropdown-toggle {
    border: 3px solid $c-border;
    border-radius: 10px;
  }
  &__actions {
    padding: 0px 20px 0 5px;
  }
}
</style>
