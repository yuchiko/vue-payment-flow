<template>
    <div class="item" :class="{'is-active': isActive}">
        <div class="item__icon" @click="handleClick">
            <component :is="icon"></component>
        </div>
        <span class="item__label" v-html="label" />
    </div>
</template>

<script>
export default {
  name: 'StepsItem',
  props: {
    label: String,
    active: Boolean,
    icon: Object,
    isActive: Boolean,
    stepIndex: Number
  },
  methods: {
    handleClick(){
        this.$emit('stepper-item-click', {isActive: this.isActive, stepIndex: this.stepIndex})
    }
  }
}
</script>

<style scoped lang="scss">
    .item {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 55px;

        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid $c-primary;
            margin: 0 auto;

            svg > * {
                fill: $c-primary;
            }

            .is-active & {
                border-color: $c-secondary;
                background: $c-secondary;
                cursor: pointer;
                
                svg > * {
                    fill: white;
                }
            }
        }

        &__label {
            font-size: 15px;
            margin-top: 4px;
            
            .is-active & {
                font-weight: $fw-bold;
            }
        }
    }
</style>
