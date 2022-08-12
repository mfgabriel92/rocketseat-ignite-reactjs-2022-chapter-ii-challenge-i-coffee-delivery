import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useCart } from "@contexts/CartContext";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

function Header() {
  const { numberOfItems } = useCart();

  return (
    <Flex paddingY="2rem" justifyContent="space-between">
      <Logo />

      <Flex gap="0.5rem">
        <NavLink to="/checkout">
          <Flex
            flex="1"
            backgroundColor="yellow.100"
            color="yellow.900"
            paddingX="0.5rem"
            paddingY="0.55rem"
            position="relative"
            borderRadius="6px"
            transition="all 0.2s"
            _hover={{ backgroundColor: "yellow.900", color: "white" }}
          >
            <Icon as={ShoppingCart} color="currentColor" weight="fill" fontSize="1.375rem" />
            <Text
              position="absolute"
              backgroundColor="yellow.900"
              color="white"
              right="-7px"
              top="-7px"
              borderRadius="100%"
              width="1.25rem"
              height="1.25rem"
              fontSize="0.75rem"
              textAlign="center"
              justifyContent="center"
              fontWeight="bold"
            >
              {numberOfItems}
            </Text>
          </Flex>
        </NavLink>
      </Flex>
    </Flex>
  );
}

export { Header };
