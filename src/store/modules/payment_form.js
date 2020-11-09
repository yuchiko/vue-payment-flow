const state = () => ({
  client: "",
  equipment_type: "",
  financial_product: "",
  shift_model: "",
  list_price_equipment: null,
  discount_rate: null,
  upfront_down_payment: null,
  transportation: null,
  transportation_pay_upfront: false,
  installation_fee: null,
  installation_fee_pay_upfront: true,
  total_financing_amount: null,
  maintenance_fee: null,
  maintenance_fee_payment_type: 'monthly',
  residual_value: null,
  residual_value_term: null,
  residual_value_term_payment_type: 'monthly',
  refurbishment_costs: null,
  refurbishment_term: null,
  refurbishment_term_payment_type: 'monthly',
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
  risk_table: {
    monthly_instalment: '',
    per_operation_hour_payment: '',
    maintenance: '',
    insurance: ''
  },
  time_fee: null,
  pay_per_use_fee: null,
  contract_duration: null,
  contract_duration_payment_type: 'monthly',
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