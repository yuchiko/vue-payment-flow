<template>
  <div>
    <NumberInput
      v-model="residual_value"
      label-string='Residual Value' 
      :errors="errors.residual_value"
    />
    <NumberInput
      v-model="residual_value_term"
      label-string='Residual Value Term' 
      sign=''
      :errors="errors.residual_value_term"
    >
      <template #right>
        <Select
          v-model="residual_value_term_payment_type" 
          :options="formData.durationTypes"
        />
      </template>
    </NumberInput>
    <NumberInput
      v-model="refurbishment_costs"
      label-string='Refurbishment Costs'
      :errors="errors.refurbishment_costs" 
    />
    <NumberInput
      v-model="refurbishment_term"
      label-string='Refurbishment Term'
      :errors="errors.refurbishment_term" 
      sign=''
    >
      <template #right>
        <Select
          v-model="refurbishment_term_payment_type" 
          :options="formData.durationTypes"
        />
      </template>
    </NumberInput>
  </div>
</template>

<script>
import {eventBus} from '@/main';
import data from '@/data/consts';

// components
import  { NumberInput, Select } from "@/components/form"

export default {
  name: 'ReuseTab',
  components: {NumberInput, Select},
  data() {
    return {
      formData: data,
      requiredFields: {
        'residual_value': 'Residual value',
        'residual_value_term': 'Residual value term', 
        'refurbishment_costs': 'Refurbishment costs',
        'refurbishment_term': 'Refurbishment term'
      },
      errors: {}
    }
  },
  props: {
    stepIndex: Number
  },
  created () {
    eventBus.$on('verify-step-next-change', checkStep => {
      this.errors = {};

      if (this.requiredFields) {
        for (const [key, value] of Object.entries(this.requiredFields)) {
          if (this.$store.state.paymentForm[key] === '' || this.$store.state.paymentForm[key] === null) {
            this.errors[key] = value + ' field is required.'
          }
        }
      }
      
      if (checkStep === this.stepIndex && Object.keys(this.errors).length === 0) eventBus.$emit('step-next-change-verified');
    })
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
