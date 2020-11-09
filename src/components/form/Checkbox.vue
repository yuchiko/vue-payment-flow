<template>
  <div class="checkbox">
    <input
        class="custom-checkbox"
        type="checkbox"
        :id="'ch-' + label"
        :name="currentValue"
        :currentValue="currentValue"
        :checked="currentValue"
        v-bind="$attrs" v-on="parentListeners"
    />
    <label :for="'ch-' + label">{{label}}</label>
  </div>
</template>

<script>

export default {
  name: "Checkbox",
  props: {
    label: String,
    currentValue: [Boolean, Event]
  },
  computed: {
    parentListeners: function() {
      // var vm = this;
      return Object.assign({}, this.$listeners);
    },
  },
};
</script>

<style scoped lang="scss"> 
    .checkbox {
      margin-top: 10px;
    }

    /* для элемента input c type="checkbox" */
    .custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    /* для элемента label, связанного с .custom-checkbox */
    .custom-checkbox+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

    /* создание в label псевдоэлемента before со следующими стилями */
    .custom-checkbox+label::before {
      content: '';
      display: inline-block;
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 0;
      background: $c-checkbox;
      margin-right: 15px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }

    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
      border-color: #b3d7ff;
    }

    /* стили для активного чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active+label::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus+label::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
      border-color: #80bdff;
    }

    /* стили для чекбокса, находящегося в состоянии checked */
    .custom-checkbox:checked+label::before {
      border-color: $c-secondary;
      background-color: $c-secondary;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.11706 13.6104L1.52926 8.21758L0 10.0152L6.11706 17.2056L19.225 1.7976L17.6958 0L6.11706 13.6104Z' fill='white'/%3E%3C/svg%3E");
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
      background-color: #e9ecef;
    }
</style>
