import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Input } from "@components/Input";
import { MapPin } from "phosphor-react";
import { useFormContext } from "react-hook-form";

function DeliveryAddressForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <Box backgroundColor="gray.200" borderRadius="6px" padding={["1.5rem", "1.5rem", "2.5rem"]}>
      <Flex flexDirection="column">
        <Flex gap="1rem" marginBottom="2rem">
          <Icon as={MapPin} color="yellow.900" fontSize="22px" />
          <Box>
            <Text textStyle="regularM">Delivery address</Text>
            <Text textStyle="regularS">Enter the address you wish to receive your order</Text>
          </Box>
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <Input
            placeholder="Zip Code"
            width="33%"
            error={!!errors.zipCode}
            {...register("zipCode")}
          />
          <Input placeholder="Street" error={!!errors.street} {...register("street")} />
          <Flex gap="1rem">
            <Input placeholder="Number" error={!!errors.number} {...register("number")} />
            <Input
              placeholder="Complement"
              error={!!errors.complement}
              {...register("complement")}
            />
          </Flex>
          <Flex gap="1rem">
            <Input
              placeholder="Neighborhood"
              error={!!errors.neighborhood}
              {...register("neighborhood")}
            />
            <Input placeholder="City" error={!!errors.city} {...register("city")} />
            <Input placeholder="State" error={!!errors.state} {...register("state")} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export { DeliveryAddressForm };
