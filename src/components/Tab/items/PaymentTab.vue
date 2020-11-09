<template>
  <div>
    <NumberInput
      v-model="contract_duration"
      label-string='Contract Duration'
      :precision="0"
      sign="" 
    >
      <template #right>
        <Select
          v-model="contract_duration_payment_type" 
          :options="formData.durationTypes"
        />
      </template>
    </NumberInput>
    <Select
      v-model="billing_cycle"
      label-string="Billing Cycle"
      :options="formData.paymentTypes"
    />
  </div>
</template>

<script>
import  { NumberInput, Select } from "@/components/form";
import data from '@/data/consts';

export default {
  name: 'PaymentTab',
  components: {NumberInput, Select},
  data() {
    return {
      formData: data
    }
  },
  props: {
  },
  computed: {
    contract_duration: {
      get () {
        return this.$store.state.paymentForm.contract_duration
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'contract_duration', value})
      }
    },
    contract_duration_payment_type: {
      get () {
        return this.$store.state.paymentForm.contract_duration_payment_type
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'contract_duration_payment_type', value})
      }
    },
    billing_cycle: {
      get () {
        return this.$store.state.paymentForm.billing_cycle
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'billing_cycle', value})
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
