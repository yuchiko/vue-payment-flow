const state = () => ({
  client: "",
  equipment_type: "",
  financial_product: "",
  shift_model: "",
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