import { As, Button, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaymentOptionProps {
  icon: As<any>;
  children: ReactNode;
  isSelected: boolean;
  onSelectType: () => void;
}

function PaymentOption({ icon, children, isSelected, onSelectType }: PaymentOptionProps) {
  return (
    <Button
      leftIcon={<Icon as={icon} color="purple.500" size="22px" />}
      fontWeight="normal"
      textStyle="buttonS"
      backgroundColor={!isSelected ? "gray.400" : "purple.100"}
      borderColor={!isSelected ? "transparent" : "purple.500"}
      borderRadius="6px"
      width="100%"
      justifyContent="flex-start"
      borderWidth="1px"
      onClick={() => onSelectType()}
      _hover={{
        backgroundColor: "purple.100",
        borderColor: "purple.500",
        borderWidth: "1px",
      }}
    >
      {children}
    </Button>
  );
}

export { PaymentOption };
