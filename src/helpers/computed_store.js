export const storeCheckbox = (fieldName) => {
    return {
        get() {
            return this.$store.state.paymentForm[fieldName]
        },
        set() {
            const value = this.$store.state.paymentForm[fieldName];
            this.$store.commit("UPDATE_FORM_FIELD", {
            fieldName: fieldName, value: !value });
        },
    }
}
