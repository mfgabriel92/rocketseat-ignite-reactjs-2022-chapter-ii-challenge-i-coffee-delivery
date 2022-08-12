import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { OrderProps } from "@customTypes/order";
import { Link, useLocation } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";

function Confirmed() {
  const { state } = useLocation();
  const incomingAddress = state as OrderProps;

  const orderSummary = {
    ...incomingAddress,
  };

  return (
    <>
      <Flex flex="1" marginTop="5rem">
        <Flex flexDirection="column" justifyContent="flex-start" gap="1rem">
          <Text textStyle="titleL" color="yellow.900">
            Yahoo! The order has been confirmed
          </Text>
          <Text textStyle="regularL">
            Now, you just need to wait and soon the coffee will arrive to you.
          </Text>
        </Flex>
      </Flex>
      <Flex marginTop="2.5rem" gap="6.375rem">
        <OrderSummary {...orderSummary} />
        <Image src="/motorcycle.png" alt="" />
      </Flex>
      <Flex justifyContent="center" marginTop="5rem">
        <Button
          backgroundColor="purple.500"
          color="gray.100"
          paddingX="0.5rem"
          paddingY="0.55rem"
          borderRadius="6px"
          _hover={{ backgroundColor: "purple.900", color: "white" }}
        >
          <Link to="/">
            <Text>Homepage</Text>
          </Link>
        </Button>
      </Flex>
    </>
  );
}

export { Confirmed };
