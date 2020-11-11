<template>
  <div>
    <FieldGroup>
      <div class="custom-slider">
        <div class="custom-slider__item">
          <span>Time Fee</span>
          <NumberInput v-model="time_fee" :precision="0" sign="%">
          </NumberInput>
        </div>
        <div class="custom-slider__item">
          <span>Pay-per-use Fee</span>
          <NumberInput v-model="pay_per_use_fee" :precision="0" sign="%">
          </NumberInput>
        </div>
      </div>
      <div class="slider-input-box">
        <VueSlider v-model="time_fee" :tooltip="'none'" :dot-size="30" />
      </div>
      <div class="slider-caption">
        <span>Time Fee</span>
        <span>Pay-per-use Fee</span>
      </div>
    </FieldGroup>
    <NumberInput
      v-model="contract_duration"
      label-string="Contract Duration"
      :precision="0"
      sign=""
      :errors='errors.contract_duration'
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
// data
import {eventBus} from '@/main';
import data from "@/data/consts";

// components
import VueSlider from "vue-slider-component";
import { NumberInput, Select, FieldGroup } from "@/components/form";


export default {
  name: "PaymentTab",
  components: { NumberInput, Select, FieldGroup, VueSlider },
  data() {
    return {
      formData: data,
      requiredFields: {
        'contract_duration': 'Contract duration',
      },
      errors: {}
    };
  },
  props: {
    stepIndex: Number
  },
  created () {
    eventBus.$on('verify-step-calc-change', checkStep => {
      this.errors = {};

      if (this.requiredFields) {
        for (const [key, value] of Object.entries(this.requiredFields)) {
          if (this.$store.state.paymentForm[key] === '' || this.$store.state.paymentForm[key] === null) {
            this.errors[key] = value + ' field is required.'
          }
        }
      }
      
      if (checkStep === this.stepIndex && Object.keys(this.errors).length === 0) eventBus.$emit('step-calc-change-verified');
    })
  },
  computed: {
    contract_duration: {
      get() {
        return this.$store.state.paymentForm.contract_duration;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "contract_duration",
          value,
        });
      },
    },
    contract_duration_payment_type: {
      get() {
        return this.$store.state.paymentForm.contract_duration_payment_type;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "contract_duration_payment_type",
          value,
        });
      },
    },
    billing_cycle: {
      get() {
        return this.$store.state.paymentForm.billing_cycle;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "billing_cycle",
          value,
        });
      },
    },
    refurbishment_costs: {
      get() {
        return this.$store.state.paymentForm.refurbishment_costs;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "refurbishment_costs",
          value,
        });
      },
    },
    refurbishment_term: {
      get() {
        return this.$store.state.paymentForm.refurbishment_term;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "refurbishment_term",
          value,
        });
      },
    },
    refurbishment_term_payment_type: {
      get() {
        return this.$store.state.paymentForm.refurbishment_term_payment_type;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "refurbishment_term_payment_type",
          value,
        });
      },
    },
    time_fee: {
      get() {
        return this.$store.state.paymentForm.time_fee;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "time_fee",
          value,
        });
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "pay_per_use_fee",
          value: 100 - value,
        });
      },
    },
    pay_per_use_fee: {
      get() {
        return this.$store.state.paymentForm.pay_per_use_fee;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "pay_per_use_fee",
          value,
        });
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "time_fee",
          value: 100 - value,
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
.custom-slider {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::v-deep .num-input__el {
      max-width: 100px;
    }

    .field-group {
      margin: 0;
    }
  }
}

.slider-input-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .vue-slider {
    flex: 1 1 65%;
    height: 10px !important;
  }

  &::v-deep .vue-slider-rail {
    background: $c-primary;
  }

  &::v-deep .vue-slider-process {
    background: $c-secondary;
    background: #8576a5;
  }

  &::v-deep .vue-slider:hover .vue-slider-process {
    background: #8576a5;
  }

  &::v-deep .vue-slider .vue-slider-process {
    background: #8576a5;
  }

  &::v-deep .vue-slider-dot-handle {
    border: 0;
    background: $c-checkbox;
  }

  &.is-selected::v-deep .vue-slider-dot-handle {
    background: $c-secondary;
  }
}

.slider-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
</style>
