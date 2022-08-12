import { As, Flex, Icon } from "@chakra-ui/react";
import { ReactElement } from "react";

interface FeatureProps {
  icon: As<any>;
  color: string;
  children: ReactElement;
}

function Feature({ icon, color, children }: FeatureProps) {
  return (
    <Flex alignItems="center" gap="0.75rem" flex="1">
      <Icon
        as={icon}
        weight="fill"
        fontSize="1rem"
        backgroundColor={color}
        borderRadius="100%"
        color="white"
        width="2rem"
        height="2rem"
        padding="0.5rem"
      />
      {children}
    </Flex>
  );
}

export { Feature };
