<template>
  <div>
    <NumberInput
      v-model="residual_value"
      label-string='Residual Value' 
    />
    <NumberInput
      v-model="residual_value_term"
      label-string='Residual Value Term' 
    >
      <template #right>
        <Select
          v-model="residual_value_term_payment_type" 
          :options="formData.paymentTypes"
        />
      </template>
    </NumberInput>
    <NumberInput
      v-model="refurbishment_costs"
      label-string='Refurbishment Costs' 
    />
    <NumberInput
      v-model="refurbishment_term"
      label-string='Refurbishment Term' 
    >
      <template #right>
        <Select
          v-model="refurbishment_term_payment_type" 
          :options="formData.paymentTypes"
        />
      </template>
    </NumberInput>
  </div>
</template>

<script>
import  { NumberInput, Select } from "@/components/form";
import data from '@/data/consts';

export default {
  name: 'ReuseTab',
  components: {NumberInput, Select},
  data() {
    return {
      formData: data
    }
  },
  props: {
  },
  computed: {
    residual_value: {
      get () {
        return this.$store.state.paymentForm.residual_value
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'residual_value', value})
      }
    },
    residual_value_term: {
      get () {
        return this.$store.state.paymentForm.residual_value_term
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'residual_value_term', value})
      }
    },
    residual_value_term_payment_type: {
      get () {
        return this.$store.state.paymentForm.residual_value_term_payment_type
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'residual_value_term_payment_type', value})
      }
    },
    refurbishment_costs: {
      get () {
        return this.$store.state.paymentForm.refurbishment_costs
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'refurbishment_costs', value})
      }
    },
    refurbishment_term: {
      get () {
        return this.$store.state.paymentForm.refurbishment_term
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'refurbishment_term', value})
      }
    },
    refurbishment_term_payment_type: {
      get () {
        return this.$store.state.paymentForm.refurbishment_term_payment_type
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'refurbishment_term_payment_type', value})
      }
    },
  }
}
</script>

<style scoped lang="scss">
</style>
