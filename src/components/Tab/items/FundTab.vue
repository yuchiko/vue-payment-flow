<template>
  <div>
    <NumberInput v-model="iot_upfront_fee" label-string="IoT Upfront Fee" />
    <NumberInput v-model="iot_running_fee" label-string="IoT Running Fee">
      <template #right>
        <Select
          v-model="iot_running_fee_payment_type"
          :options="formData.paymentTypes"
        />
      </template>
    </NumberInput>
    <NumberInput
      v-model="fund_administration_fee"
      label-string="Fund Administration Fee"
    />
    <NumberInput v-model="insurance" label-string="Insurance">
      <template #right>
        <Select
          v-model="insurance_payment_type"
          :options="formData.paymentTypes"
        />
      </template>
    </NumberInput>
    <NumberInput v-model="standard_deviation" label-string="Standard Deviation">
      <template #right>
        <div class="d-flex">
          <span>x</span>
          <input
            v-model="standard_deviation_multiplier"
            class="custom-input"
            type="text"
          />
        </div>
      </template>
    </NumberInput>
    <FieldGroup>
      <Label class="label--bold">Margins</Label>
      <div class="group-numeric">
        <div class="group-numeric__item">
          <NumberInput
            v-model="margin_funding"
            sign="%"
            :precision="0"
            :value-range="{ min, max }"
          />
          <span>Funding</span>
        </div>
        <div class="group-numeric__item">
          <NumberInput
            v-model="margin_credit_risk"
            sign="%"
            :precision="0"
            :value-range="{ min, max }"
          />
          <span>Credit Risk</span>
        </div>
        <div class="group-numeric__item">
          <NumberInput
            v-model="margin_early_termination_risk"
            sign="%"
            :precision="0"
            :value-range="{ min, max }"
          />
          <span>Early Termination Risk</span>
        </div>
        <div class="group-numeric__item">
          <NumberInput
            v-model="margin_pay_per_use_risk"
            sign="%"
            :precision="0"
            :value-range="{ min, max }"
          />
          <span>Pay-per-use Risk</span>
        </div>
      </div>
    </FieldGroup>
    <FieldGroup>
      <Label class="label--bold">Risk Table</Label>
      <div class="group-numeric">
        <div class="group-numeric__heading">Monthly Instalment</div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_monthly_instalment_credit_risk"
            :current-value="risk_table_monthly_instalment_credit_risk"
            label="Credit Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_monthly_instalment_early_termination_risk"
            :current-value="
              risk_table_monthly_instalment_early_termination_risk
            "
            label="Early Termination Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_monthly_instalment_pay_per_use_risk"
            :current-value="risk_table_monthly_instalment_pay_per_use_risk"
            label="Pay-per-use Risk"
          />
        </div>
      </div>
      <div class="group-numeric">
        <div class="group-numeric__heading">Per-Operation-Hour Payment</div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_per_operation_hour_payment_credit_risk"
            :current-value="risk_table_per_operation_hour_payment_credit_risk"
            id="risk_table_per_operation_hour_payment_credit_risk"
            label="Credit Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_per_operation_hour_payment_early_termination_risk"
            :current-value="risk_table_per_operation_hour_payment_early_termination_risk"
            id="risk_table_per_operation_hour_payment_early_termination_risk"
            label="Early Termination Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_per_operation_hour_payment_pay_per_use_risk"
            :current-value="risk_table_per_operation_hour_payment_pay_per_use_risk"
            id="risk_table_per_operation_hour_payment_pay_per_use_risk"
            label="Pay-per-use Risk"
          />
        </div>
      </div>
      <div class="group-numeric">
        <div class="group-numeric__heading">Maintenance</div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_maintenance_credit_risk"
            :current-value="risk_table_maintenance_credit_risk"
            id="risk_table_maintenance_credit_risk"
            label="Credit Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_maintenance_early_termination_risk"
            :current-value="risk_table_maintenance_early_termination_risk"
            id="risk_table_maintenance_early_termination_risk"
            label="Early Termination Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_maintenance_pay_per_use_risk"
            :current-value="risk_table_maintenance_pay_per_use_risk"
            id="risk_table_maintenance_pay_per_use_risk"
            label="Pay-per-use Risk"
          />
        </div>
      </div>
      <div class="group-numeric">
        <div class="group-numeric__heading">Insurance</div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_insurance_credit_risk"
            :current-value="risk_table_insurance_credit_risk"
            id="risk_table_insurance_credit_risk"
            label="Credit Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_insurance_early_termination_risk"
            :current-value="risk_table_insurance_early_termination_risk"
            id="risk_table_insurance_early_termination_risk"
            label="Early Termination Risk"
          />
        </div>
        <div class="group-numeric__item">
          <Checkbox
            v-model="risk_table_insurance_pay_per_use_risk"
            :current-value="risk_table_insurance_pay_per_use_risk"
            id="risk_table_insurance_pay_per_use_risk"
            label="Pay-per-use Risk"
          />
        </div>
      </div>
    </FieldGroup>
  </div>
</template>

<script>
import {
  NumberInput,
  Select,
  FieldGroup,
  Label,
  Checkbox,
} from "@/components/form";
import data from "@/data/consts";

export default {
  name: "FundTab",
  components: { NumberInput, Select, FieldGroup, Label, Checkbox },
  data() {
    return {
      formData: data,
      min: 0,
      max: 100,
    };
  },
  props: {},
  computed: {
    iot_upfront_fee: {
      get() {
        return this.$store.state.paymentForm.iot_upfront_fee;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "iot_upfront_fee",
          value,
        });
      },
    },
    iot_running_fee: {
      get() {
        return this.$store.state.paymentForm.iot_running_fee;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "iot_running_fee",
          value,
        });
      },
    },
    iot_running_fee_payment_type: {
      get() {
        return this.$store.state.paymentForm.iot_running_fee_payment_type;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "iot_running_fee_payment_type",
          value,
        });
      },
    },
    fund_administration_fee: {
      get() {
        return this.$store.state.paymentForm.fund_administration_fee;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "fund_administration_fee",
          value,
        });
      },
    },
    insurance: {
      get() {
        return this.$store.state.paymentForm.insurance;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "insurance",
          value,
        });
      },
    },
    insurance_payment_type: {
      get() {
        return this.$store.state.paymentForm.insurance_payment_type;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "insurance_payment_type",
          value,
        });
      },
    },
    standard_deviation: {
      get() {
        return this.$store.state.paymentForm.standard_deviation;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "standard_deviation",
          value,
        });
      },
    },
    standard_deviation_multiplier: {
      get() {
        return this.$store.state.paymentForm.standard_deviation_multiplier;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "standard_deviation_multiplier",
          value,
        });
      },
    },
    margin_funding: {
      get() {
        return this.$store.state.paymentForm.margin_funding;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "margin_funding",
          value,
        });
      },
    },
    margin_credit_risk: {
      get() {
        return this.$store.state.paymentForm.margin_credit_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "margin_credit_risk",
          value,
        });
      },
    },
    margin_early_termination_risk: {
      get() {
        return this.$store.state.paymentForm.margin_early_termination_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "margin_early_termination_risk",
          value,
        });
      },
    },
    margin_pay_per_use_risk: {
      get() {
        return this.$store.state.paymentForm.margin_pay_per_use_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "margin_pay_per_use_risk",
          value,
        });
      },
    },
    risk_table_monthly_instalment_credit_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_monthly_instalment_credit_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_monthly_instalment_credit_risk",
          value,
        });
      },
    },
    risk_table_monthly_instalment_early_termination_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_monthly_instalment_early_termination_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_monthly_instalment_early_termination_risk",
          value,
        });
      },
    },
    risk_table_monthly_instalment_pay_per_use_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_monthly_instalment_pay_per_use_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_monthly_instalment_pay_per_use_risk",
          value,
        });
      },
    },
    risk_table_per_operation_hour_payment_credit_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_per_operation_hour_payment_credit_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_per_operation_hour_payment_credit_risk",
          value,
        });
      },
    },
    risk_table_per_operation_hour_payment_early_termination_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_per_operation_hour_payment_early_termination_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_per_operation_hour_payment_early_termination_risk",
          value,
        });
      },
    },
    risk_table_per_operation_hour_payment_pay_per_use_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_per_operation_hour_payment_pay_per_use_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_per_operation_hour_payment_pay_per_use_risk",
          value,
        });
      },
    },
    risk_table_maintenance_credit_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_maintenance_credit_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_maintenance_credit_risk",
          value,
        });
      },
    },
    risk_table_maintenance_early_termination_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_maintenance_early_termination_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_maintenance_early_termination_risk",
          value,
        });
      },
    },
    risk_table_maintenance_pay_per_use_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_maintenance_pay_per_use_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_maintenance_pay_per_use_risk",
          value,
        });
      },
    },
    risk_table_insurance_credit_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_insurance_credit_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_insurance_credit_risk",
          value,
        });
      },
    },
    risk_table_insurance_early_termination_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_insurance_early_termination_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_insurance_early_termination_risk",
          value,
        });
      },
    },
    risk_table_insurance_pay_per_use_risk: {
      get() {
        return this.$store.state.paymentForm
          .risk_table_insurance_pay_per_use_risk;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_FIELD", {
          fieldName: "risk_table_insurance_pay_per_use_risk",
          value,
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
.d-flex {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.custom-input {
  max-width: 80px;
  border: 3px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 5px;
  margin-left: 10px;
}

.group-numeric {
  margin-bottom: 30px;

  &__heading {
    margin-top: 10px;
  }

  &::v-deep .num-input__el {
    max-width: 100px;
  }

  .field-group {
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;

    & > span {
      margin-left: 10px;
    }
  }
}
</style>
