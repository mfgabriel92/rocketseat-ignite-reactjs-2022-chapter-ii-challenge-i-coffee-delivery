import { As, Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface OrderSummaryItemProps {
  color: string;
  icon: As<any>;
  children: ReactElement;
}

function OrderSummaryItem({ color, icon: Icon, children }: OrderSummaryItemProps) {
  return (
    <Flex gap="1.125rem">
      <Flex
        backgroundColor={color}
        borderRadius="100%"
        width="2rem"
        height="2rem"
        padding="0.5rem"
        alignItems="center"
        justifyContent="center"
        color="gray.100"
      >
        <Icon as={Icon} weight="fill" fontSize="1rem" />
      </Flex>
      <Flex flexDirection="column" justifyContent="flex-start">
        {children}
      </Flex>
    </Flex>
  );
}

export { OrderSummaryItem };
