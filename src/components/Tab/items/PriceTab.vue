<template>
  <div>
    <NumberInput
      v-model="list_price_equipment"
      label-string='List Price Of Equipment' 
    />
    <NumberSlider
      v-model="discount_rate"
      label-string='Discount Rate' 
    />
    <NumberSlider
      v-model="upfront_down_payment"
      label-string='Upfront Down Payment' 
    />
  </div>
</template>

<script>
import  { NumberInput, NumberSlider } from "@/components/form";

export default {
  name: 'PriceTab',
  components: {
    NumberInput,
    NumberSlider,
  },
  props: {
  },
  computed: {
    list_price_equipment: {
      get () {
        return this.$store.state.paymentForm.list_price_equipment
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'list_price_equipment', value})
      }
    },
    discount_rate: {
      get () {
        return this.$store.state.paymentForm.discount_rate
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'discount_rate', value})
      }
    },
    upfront_down_payment: {
      get () {
        return this.$store.state.paymentForm.upfront_down_payment
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'upfront_down_payment', value})
      }
    },
  }
}
</script>

<style scoped lang="scss">
</style>
