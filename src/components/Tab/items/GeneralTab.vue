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
    client: {
      get () {
        return this.$store.state.paymentForm.client
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'client', value})
      }
    },
    equipment_type: {
      get () {
        return this.$store.state.paymentForm.equipment_type
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'equipment_type', value})
      }
    },
    financial_product: {
      get () {
        return this.$store.state.paymentForm.financial_product
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'financial_product', value})
      }
    },
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
