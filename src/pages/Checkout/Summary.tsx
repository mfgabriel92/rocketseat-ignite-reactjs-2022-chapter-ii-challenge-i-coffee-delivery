import { Button, Flex, Text } from "@chakra-ui/react";
import { useCart } from "@contexts/CartContext";
import { SummaryItem } from "./SummaryItem";

interface SummaryProps {
  onSubmit: () => void;
}

function Summary({ onSubmit }: SummaryProps) {
  const { items, totalPriceWithoutFee } = useCart();

  return (
    <Flex
      backgroundColor="gray.200"
      borderTopEndRadius="36px"
      borderBottomLeftRadius="36px"
      borderTopStartRadius="6px"
      borderBottomEndRadius="6px"
      padding="2.5rem"
      flexDirection="column"
    >
      {items?.map((item) => (
        <SummaryItem key={item.id} item={item} />
      ))}
      <Flex flexDirection="column" gap="0.843rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text textStyle="regularS">Total items</Text>
          <Text textStyle="boldL">$ {totalPriceWithoutFee.toFixed(2)}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text textStyle="regularS">Delivery</Text>
          <Text textStyle="regularS">$ 1.90</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text textStyle="boldL">Total</Text>
          <Text textStyle="boldL">$ {(totalPriceWithoutFee + 1.9).toFixed(2)}</Text>
        </Flex>
      </Flex>
      <Button
        backgroundColor="yellow.500"
        textStyle="buttonG"
        marginTop="1.5rem"
        onClick={onSubmit}
        _hover={{ backgroundColor: "yellow.900" }}
      >
        CONFIRM ORDER
      </Button>
    </Flex>
  );
}

export { Summary };
