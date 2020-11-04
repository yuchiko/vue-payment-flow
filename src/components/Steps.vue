<template>
  <div class="steps">
    <template v-for="(tab, index) in tabs">
      <StepsItem  
        :label="tab.label" 
        :key="tab.label" 
        :icon="tab.icon"
        :is-active="step == index+1" />
      <span v-if="index < tabs.length - 1" class="steps__divider" :key="tab.label + '-label'"></span>
    </template>
  </div>
</template>

<script>
import GeneralIcon from "@/assets/icons/general.svg?inline";
import PriceIcon from "@/assets/icons/price.svg?inline";
import ReUseIcon from "@/assets/icons/re-use.svg?inline";
import FundIcon from "@/assets/icons/fund.svg?inline";
import PaymentIcon from "@/assets/icons/payment.svg?inline";

import StepsItem from "./StepsItem";

export default {
  name: 'Steps',
  components: {StepsItem},
  props: {
    step: Number
  },
  data() {
      return {
          tabs: [
              {label: 'General', icon: GeneralIcon},
              {label: 'Price', icon: PriceIcon},
              {label: 'Re-Use', icon: ReUseIcon},
              {label: 'Fund', icon: FundIcon},
              {label: 'Payment<br>Option', icon: PaymentIcon},
          ]
      }
  }
}
</script>

<style scoped lang="scss">
  .steps {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 90px;

    &__divider {
      flex: 1;
      height: 5px;
      background: $c-primary;
      border-radius: 15px;
      margin-top: 25px;
      // margin-left: 2px;
      // margin-right: 2px;
    }
  }
</style>
