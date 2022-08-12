import { DeliveryAddressProps } from "pages/Checkout/schema";
import { PaymentType } from "./payment";

export interface OrderProps extends DeliveryAddressProps {
  paymentType: PaymentType;
}
