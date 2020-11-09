<template>
  <div>
    <FieldGroup>
      <Label>List Price Of Equipment</Label>
      <currency-input
        v-model="value"
        class="currency-input"
      />
    </FieldGroup>
  </div>
</template>

<script>
import  { FieldGroup, Label } from "@/components/form";

export default {
  name: 'PriceTab',
  components: {
    FieldGroup,
    Label,
  },
  props: {
  },
}
</script>

<style scoped lang="scss">
</style>
