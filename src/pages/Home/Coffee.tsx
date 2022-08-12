import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useCart } from "@contexts/CartContext";
import { CoffeeItem, SimpleCoffeeItem } from "@customTypes/coffee";
import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";

function Coffee(coffee: SimpleCoffeeItem) {
  const [quantity, setQuantity] = useState<number>(0);
  const { updateCart, increaseItemQuantity, decreaseItemQuantity } = useCart();

  useEffect(() => {
    const storedCart = localStorage.getItem("@coffeeDelivery_cart");
    if (storedCart) {
      const parsedStoredCart = JSON.parse(storedCart);
      const thisCoffee = parsedStoredCart.items?.find((c: CoffeeItem) => c.id === coffee.id);

      if (thisCoffee) {
        setQuantity(thisCoffee.quantity);
        updateCart(thisCoffee);
      }
    }
  }, []);

  function increaseQuantity() {
    setQuantity((state) => state + 1);
    increaseItemQuantity(coffee.id, coffee);
  }

  function decreaseQuantity() {
    setQuantity((state) => {
      if (state > 0) {
        return (state = state - 1);
      }

      return 0;
    });

    decreaseItemQuantity(coffee.id);
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      height="19.375rem"
      backgroundColor="gray.200"
      borderTopEndRadius="36px"
      borderBottomLeftRadius="36px"
      borderTopStartRadius="6px"
      borderBottomEndRadius="6px"
    >
      <Image
        src={`/coffees/${coffee.image}.png`}
        alt="Espresso"
        width="120px"
        marginTop="-1.75rem"
      />
      <Flex flexDirection="column" alignItems="center" gap="0.5rem" marginTop="0.75rem">
        <Flex alignItems="center" gap="0.25rem">
          {coffee.tags?.map((tag) => (
            <Box
              key={tag}
              backgroundColor="yellow.100"
              borderRadius="32px"
              paddingX="0.5rem"
              paddingY="0.25rem"
              marginBottom="0.5rem"
            >
              <Text color="yellow.900" textStyle="tag">
                {tag.toUpperCase()}
              </Text>
            </Box>
          ))}
        </Flex>
        <Text textStyle="titleS">{coffee.name}</Text>
        <Text textStyle="regularS" textAlign="center">
          {coffee.description}
        </Text>
      </Flex>
      <Flex
        width="100%"
        marginTop="auto"
        alignItems="center"
        justifyContent="space-between"
        padding="1.5rem"
      >
        <Flex alignItems="center" gap="0.25rem">
          <Text textStyle="regularS">$</Text>
          <Text textStyle="titleM">{coffee.price.toFixed(2)}</Text>
        </Flex>
        <Flex gap="0.5rem">
          <Flex
            backgroundColor="gray.500"
            borderRadius="8px"
            padding="0.5rem"
            alignItems="center"
            gap="0.5rem"
          >
            <Icon
              as={Minus}
              color="purple.500"
              onClick={decreaseQuantity}
              _hover={{ color: "purple.900", cursor: "pointer" }}
            />
            <Text>{quantity}</Text>
            <Icon
              as={Plus}
              color="purple.500"
              onClick={increaseQuantity}
              _hover={{ color: "purple.900", cursor: "pointer" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { Coffee };
