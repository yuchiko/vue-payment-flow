import GeneralIcon from "@/assets/icons/general.svg?inline";
import PriceIcon from "@/assets/icons/price.svg?inline";
import ReUseIcon from "@/assets/icons/re-use.svg?inline";
import FundIcon from "@/assets/icons/fund.svg?inline";
import PaymentIcon from "@/assets/icons/payment.svg?inline";

import { 
    GeneralTab,
    PriceTab,
    ReuseTab,
    FundTab,
    PaymentTab
} from "@/components/Tab/items"

export default [
    {
        label: 'General',
        icon: GeneralIcon,
        tabComponent: GeneralTab
    },
    {
        label: 'Price',
        icon: PriceIcon,
        heading: 'Equipment Price',
        tabComponent: PriceTab
    },
    {
        label: 'Re-Use',
        icon: ReUseIcon,
        heading: 'Reuse',
        tabComponent: ReuseTab
    },
    {
        label: 'Fund',
        icon: FundIcon,
        tabComponent: FundTab
    },
    {
        label: 'Payment<br>Option',
        icon: PaymentIcon,
        heading: 'Payment Option',
        tabComponent: PaymentTab
    },
]
