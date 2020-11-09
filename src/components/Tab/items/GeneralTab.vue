<template>
  <div>
    <Select
      v-model="client"
      label-string="Client" 
      :options="['Canada', 'United States']"
      @input="handleInput"
    />
  </div>
</template>

<script>
import {Select} from '@/components/form'

export default {
  name: 'GeneralTab',
  components: {Select},
  computed: {
    client: {
      get () {
        return this.$store.state.paymentForm.client
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_FIELD', {fieldName: 'client', value})
      }
    }
  },
  methods: {
    handleInput() {
      console.log(arguments)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
