<template>
  <div>
    <NumberInput
      v-model="list_price_equipment"
      label-string='List Price Of Equipment'
      :errors='errors.list_price_equipment' 
    />
    <NumberSlider
      v-model="discount_rate"
      label-string='Discount Rate' 
    />
    <NumberSlider
      v-model="upfront_down_payment"
      label-string='Upfront Down Payment' 
    />
    <NumberInput
      v-model="transportation"
      label-string='Transportation'
      :errors='errors.transportation' 
    >
      <Checkbox 
        v-model="transportation_pay_upfront" 
        id='transportation_pay_upfront' 
        label="Pay Upfront" />
    </NumberInput>
    <NumberInput
      v-model="installation_fee"
      label-string='Installation Fee'
      :errors='errors.installation_fee'  
    >
      <Checkbox 
        v-model="installation_fee_pay_upfront" 
        id='installation_fee_pay_upfront' 
        label="Pay Upfront" />
    </NumberInput>
    <NumberInput
      v-model="total_financing_amount"
      label-string='Total Financing Amount'
      :errors='errors.total_financing_amount'  
    />
    <NumberInput
      v-model="maintenance_fee"
      label-string='Maintenance Fee' 
      :errors='errors.maintenance_fee'
    >
      <template #right>
        <Select
          v-model="maintenance_fee_payment_type" 
          :options="formData.paymentTypes"
        />
      </template>
    </NumberInput>
  </div>
</template>

<script>
// data
import data from '@/data/consts';
import {eventBus} from '@/main';

// store
import {storeCheckbox} from "@/helpers/computed_store"

// components
import  { NumberInput, NumberSlider, Checkbox, Select } from "@/components/form";

export default {
  name: 'PriceTab',
  components: {
    NumberInput,
    NumberSlider,
    Checkbox,
    Select
  },
  data() {
    return {
      formData: data,
      requiredFields: {
        'list_price_equipment': 'List Price Of Equipment',
        'transportation': 'Transportation', 
        'installation_fee': 'Installation Fee',
        'total_financing_amount': 'Total financing amount',
        'maintenance_fee': 'Maintenance fee',
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
    transportation: {
      get () {
        return this.$store.state.paymentForm.transportation
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'transportation', value})
      }
    },
    transportation_pay_upfront: storeCheckbox("transportation_pay_upfront"),
    installation_fee: {
      get () {
        return this.$store.state.paymentForm.installation_fee
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'installation_fee', value})
      }
    },
    installation_fee_pay_upfront: storeCheckbox("installation_fee_pay_upfront"),
    total_financing_amount: {
      get () {
        return this.$store.state.paymentForm.total_financing_amount
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'total_financing_amount', value})
      }
    },
    maintenance_fee: {
      get () {
        return this.$store.state.paymentForm.maintenance_fee
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'maintenance_fee', value})
      }
    },
    maintenance_fee_payment_type: {
      get () {
        return this.$store.state.paymentForm.maintenance_fee_payment_type
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'maintenance_fee_payment_type', value})
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
