<template>
  <div>
    <Select
      v-model="client"
      label-string="Client" 
      :options="formData.clients"
      :errors="errors.client"
    />
    <Select
      v-model="equipment_type"
      label-string="Equipment Type" 
      :options="formData.equipment_types"
      :errors="errors.equipment_type"
    />
    <Select
      v-model="financial_product"
      label-string="Financial Product" 
      :options="formData.financial_products"
      :errors="errors.financial_product"
    />
    <RadioButtons
      label-string="Shift Model"
      :options="formData.shift_models"
      :checked-value="shift_model"
      @change="updateShiftModel"
      :errors="errors.shift_model"
    />
  </div>
</template>

<script>
// data
import data from '@/data/mockFormData';
import {eventBus} from '@/main';

// store
import { mapState } from 'vuex';
import {storeSelect} from "@/helpers/computed_store"

// components
import {Select, RadioButtons} from '@/components/form'


export default {
  name: 'GeneralTab',
  props: {
    stepIndex: Number
  },
  data() {
    return {
      formData: data,
      requiredFields: {
        'client': 'Client',
        'equipment_type': 'Equipment Type', 
        'financial_product': 'Financial Product',
        'shift_model': 'Shift Model'
      },
      errors: {}
    }
  },
  components: {Select, RadioButtons},
  computed: {
    ...mapState({
      shift_model: state => state.paymentForm.shift_model
    }),
    client: storeSelect('client'),
    equipment_type: storeSelect('equipment_type'),
    financial_product: storeSelect('financial_product'),
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
  methods: {
    updateShiftModel(e) {
      const value = e.target.value;
      this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'shift_model', value})
    }
  }
}
</script>

<style scoped lang="scss">
</style>
