import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { PaymentType } from "@customTypes/payment";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentOption } from "./PaymentOption";

interface PaymentMethodProps {
  paymentSelected: PaymentType;
  onSelectType: (type: PaymentType) => void;
}

function PaymentMethod({ paymentSelected, onSelectType }: PaymentMethodProps) {
  return (
    <Box backgroundColor="gray.200" borderRadius="6px" padding={["1.5rem", "1.5rem", "2.5rem"]}>
      <Flex flexDirection="column">
        <Flex gap="1rem">
          <Icon as={CurrencyDollar} color="purple.500" fontSize="22px" />
          <Box>
            <Text textStyle="regularM">Payment</Text>
            <Text textStyle="regularS">Pay upon delivery. Choose the way you wish to pay</Text>
          </Box>
        </Flex>
        <Flex marginTop="2rem" justifyContent="space-between" gap="0.75rem">
          <PaymentOption
            icon={CreditCard}
            onSelectType={() => onSelectType("credit_card")}
            isSelected={paymentSelected === "credit_card"}
          >
            CREDIT CARD
          </PaymentOption>
          <PaymentOption
            icon={Bank}
            onSelectType={() => onSelectType("debit_card")}
            isSelected={paymentSelected === "debit_card"}
          >
            DEBIT CARD
          </PaymentOption>
          <PaymentOption
            icon={Money}
            onSelectType={() => onSelectType("money")}
            isSelected={paymentSelected === "money"}
          >
            MONEY
          </PaymentOption>
        </Flex>
      </Flex>
    </Box>
  );
}

export { PaymentMethod };
