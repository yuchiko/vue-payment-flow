const state = () => ({
  client: "",
  equipment_type: "",
  financial_product: "",
  shift_model: "",
  list_price_equipment: null,
  discount_rate: 0,
  upfront_down_payment: 0,
  transportation: null,
  transportation_pay_upfront: false,
  installation_fee: null,
  installation_fee_pay_upfront: true,
  total_financing_amount: null,
  maintenance_fee: null,
  maintenance_fee_payment_type: 'monthly',
  residual_value: null,
  residual_value_term: null,
  residual_value_term_payment_type: 'months',
  refurbishment_costs: null,
  refurbishment_term: null,
  refurbishment_term_payment_type: 'months',
  iot_upfront_fee: null,
  iot_running_fee: null,
  iot_running_fee_payment_type: 'monthly',
  fund_administration_fee: null,
  insurance: null,
  insurance_payment_type: 'monthly',
  standard_deviation: null,
  standard_deviation_multiplier: null,
  margin_funding: null,
  margin_credit_risk: null,
  margin_early_termination_risk: null,
  margin_pay_per_use_risk: null,
  risk_table_monthly_instalment_credit_risk: false,
  risk_table_monthly_instalment_early_termination_risk: false,
  risk_table_monthly_instalment_pay_per_use_risk: false,
  risk_table_per_operation_hour_payment_credit_risk: false,
  risk_table_per_operation_hour_payment_early_termination_risk: false,
  risk_table_per_operation_hour_payment_pay_per_use_risk: false,
  risk_table_maintenance_credit_risk: false,
  risk_table_maintenance_early_termination_risk: false,
  risk_table_maintenance_pay_per_use_risk: false,
  risk_table_insurance_credit_risk: false,
  risk_table_insurance_early_termination_risk: false,
  risk_table_insurance_pay_per_use_risk: false,
  time_fee: 50,
  pay_per_use_fee: 50,
  contract_duration: null,
  contract_duration_payment_type: 'months',
  billing_cycle: 'Monthly Payment'
});

const getters = {
};

const actions = {
  updateFormField({ commit }, fieldName, newValue) {
    commit("UPDATE_FORM_FIELD", fieldName, newValue);
  },
};

const mutations = {
  UPDATE_FORM_FIELD(state, {fieldName, value}) {
    state[fieldName] = value;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};