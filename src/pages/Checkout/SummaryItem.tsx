import { Button, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useCart } from "@contexts/CartContext";
import { CoffeeItem } from "@customTypes/coffee";
import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

interface SummaryItemProps {
  item: CoffeeItem;
}

function SummaryItem({ item }: SummaryItemProps) {
  const { updateCart, increaseItemQuantity, decreaseItemQuantity, removeItem } = useCart();

  useEffect(() => {
    const storedCart = localStorage.getItem("@coffeeDelivery_cart");
    if (storedCart) {
      const parsedStoredCart = JSON.parse(storedCart);
      const thisCoffee = parsedStoredCart.items?.find((c: CoffeeItem) => c.id === item.id);

      if (thisCoffee) {
        updateCart(thisCoffee);
      }
    }
  }, []);

  return (
    <Flex flexDirection="column">
      <Flex flex="1">
        <Image src={`/coffees/${item.image}.png`} width="64px" height="64px" alt="" />
        <Flex flexDirection="column" gap="0.5rem" marginLeft="1.125rem" alignItems="flex-start">
          <Text textStyle="regularM">{item.name}</Text>
          <Flex gap="0.5rem">
            <Flex
              backgroundColor="gray.400"
              borderRadius="8px"
              paddingX="0.5rem"
              alignItems="center"
              gap="0.5rem"
              height="2rem"
            >
              <Icon
                as={Minus}
                color="purple.500"
                onClick={() => decreaseItemQuantity(item.id)}
                _hover={{ color: "purple.900", cursor: "pointer" }}
              />
              <Text>{item.quantity}</Text>
              <Icon
                as={Plus}
                color="purple.500"
                onClick={() => increaseItemQuantity(item.id)}
                _hover={{ color: "purple.900", cursor: "pointer" }}
              />
            </Flex>
            <Button
              leftIcon={<Icon as={Trash} color="purple.500" size="1rem" />}
              fontWeight="normal"
              textStyle="buttonS"
              backgroundColor="gray.400"
              borderRadius="6px"
              justifyContent="flex-start"
              height="2rem"
              onClick={() => removeItem(item.id)}
            >
              REMOVE
            </Button>
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end" flex="1">
          <Text textStyle="boldM">$ {item.totalPrice.toFixed(2)}</Text>
        </Flex>
      </Flex>
      <Divider marginY="1.5rem" borderColor="gray.500" />
    </Flex>
  );
}

export { SummaryItem };
