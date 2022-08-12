import { Box, Flex, Text } from "@chakra-ui/react";
import { OrderProps } from "@customTypes/order";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { OrderSummaryItem } from "./OrderSummaryItem";

function OrderSummary({ street, neighborhood, city, number, state, paymentType }: OrderProps) {
  console.log(paymentType);
  return (
    <>
      <Box
        flex="1"
        padding="1px"
        borderTopEndRadius="36px"
        borderBottomLeftRadius="36px"
        borderTopStartRadius="10px"
        borderBottomEndRadius="10px"
        borderWidth="2px"
        bgGradient="linear-gradient(to right, #DBAC2C, #8047F8)"
      >
        <Flex
          flexDirection="column"
          padding="2.5rem"
          background="gray.100"
          flex="1"
          height="100%"
          borderTopEndRadius="32px"
          borderBottomLeftRadius="32px"
          borderTopStartRadius="7px"
          borderBottomEndRadius="7px"
          gap="2rem"
        >
          <OrderSummaryItem color="purple.500" icon={MapPin}>
            <>
              <Text>
                Deliver to {street}, {number}
              </Text>
              <Text>
                {city}, {neighborhood}, {state}
              </Text>
            </>
          </OrderSummaryItem>
          <OrderSummaryItem color="yellow.500" icon={Clock}>
            <>
              <Text>ETA delivery</Text>
              <Text fontWeight="bold">20 min - 30 min</Text>
            </>
          </OrderSummaryItem>
          <OrderSummaryItem color="yellow.900" icon={CurrencyDollar}>
            <>
              <Text>Payment upon delivery</Text>
              <Text fontWeight="bold">
                {paymentType === "credit_card"
                  ? "Credit Card"
                  : paymentType === "debit_card"
                  ? "Debit Card"
                  : "Money"}
              </Text>
            </>
          </OrderSummaryItem>
        </Flex>
      </Box>
    </>
  );
}

export { OrderSummary };
