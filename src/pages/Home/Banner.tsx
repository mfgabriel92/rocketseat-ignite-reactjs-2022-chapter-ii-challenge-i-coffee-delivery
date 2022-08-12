import { Flex, Image, Text } from "@chakra-ui/react";
import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { Feature } from "./Feature";

function Banner() {
  return (
    <Flex
      flex="1"
      justifyContent="space-between"
      alignItems="center"
      paddingY="5.875rem"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Flex flexDirection="column" width="100%" maxWidth="588px">
        <Text as="h1" fontSize="5xl">
          Find the perfect coffee for anytime of the day
        </Text>
        <Text textStyle="regularL" marginTop="1rem">
          With Coffee Delivery you receive your coffee wherever you are, any time.
        </Text>

        <Flex marginTop="4.125rem" flexDirection={["column", "row"]} gap={["1.25rem", "0"]}>
          <Flex justifyContent="space-between" flexDirection="column" flex="1" gap="1.25rem">
            <Feature icon={ShoppingCart} color="yellow.900">
              <Text>Safe, simple purchase</Text>
            </Feature>
            <Feature icon={Clock} color="yellow.500">
              <Text>Fast, tracked delivery</Text>
            </Feature>
          </Flex>
          <Flex justifyContent="space-between" flexDirection="column" marginTop="1" gap="1.25rem">
            <Feature icon={Package} color="gray.700">
              <Text>The package keeps the coffee intact</Text>
            </Feature>
            <Feature icon={Coffee} color="purple.500">
              <Text>The coffee arrives fresh to you</Text>
            </Feature>
          </Flex>
        </Flex>
      </Flex>
      <Image src="public/coffee-cup.png" alt="Coffee Cup" width="456px" />
    </Flex>
  );
}

export { Banner };
