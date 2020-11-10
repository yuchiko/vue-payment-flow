<template>
  <div>
    <Select
      v-model="client"
      label-string="Client" 
      :options="formData.clients"
    />
    <Select
      v-model="equipment_type"
      label-string="Equipment Type" 
      :options="formData.equipment_types"
    />
    <Select
      v-model="financial_product"
      label-string="Financial Product" 
      :options="formData.financial_products"
    />
    <RadioButtons
      label-string="Shift Model"
      :options="formData.shift_models"
      :checked-value="shift_model"
      @change="updateShiftModel"
    />
  </div>
</template>

<script>
import {Select, RadioButtons} from '@/components/form'
import data from '@/data/mockFormData';
import { mapState } from 'vuex';
import {storeSelect} from "@/helpers/computed_store"

export default {
  name: 'GeneralTab',
  data() {
    return {
      formData: data
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
