import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { useCart } from "@contexts/CartContext";
import { PaymentType } from "@customTypes/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingBagOpen } from "phosphor-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { DeliveryAddressForm } from "./DeliveryAddressForm";
import { PaymentMethod } from "./PaymentMethod";
import { Summary } from "./Summary";
import schema, { DeliveryAddressProps } from "./schema";

function Checkout() {
  const { numberOfItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState<PaymentType>("credit_card");
  const form = useForm<DeliveryAddressProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  function handleOrderSubmit(address: DeliveryAddressProps) {
    const order = {
      ...address,
      paymentType: payment,
    };

    form.reset();
    clearCart();
    navigate("/confirmed", { state: order });
  }

  if (numberOfItems === 0) {
    return (
      <Flex flex="1" justifyContent="center" marginTop="5rem">
        <VStack spacing="1rem">
          <Icon as={ShoppingBagOpen} weight="duotone" fontSize="5rem" />
          <Text as="h2" fontSize="3xl" color="gray.700">
            No items in cart at the moment
          </Text>
          <Text fontSize="1xl" color="gray.700" display="inline-flex">
            Go back to the previous page and select your coffee!
          </Text>
          <Link to="/">
            <Text color="purple.500" textStyle="boldL">
              Continue shopping
            </Text>
          </Link>
        </VStack>
      </Flex>
    );
  }

  return (
    <FormProvider {...form}>
      <Flex
        alignItems="flex-start"
        flexDirection={["column", "column", "column", "row"]}
        gap="2rem"
      >
        <Flex width="100%" flexDirection="column" gap="0.75rem">
          <Text textStyle="titleXs">Finish your order</Text>
          <DeliveryAddressForm />
          <PaymentMethod paymentSelected={payment} onSelectType={setPayment} />
        </Flex>
        <Flex
          width="100%"
          flexDirection="column"
          gap="0.75rem"
          maxWidth={["100%", "100%", "100%", "28rem"]}
        >
          <Text textStyle="titleXs">Selected coffees</Text>
          <Summary onSubmit={form.handleSubmit(handleOrderSubmit)} />
        </Flex>
      </Flex>
    </FormProvider>
  );
}

export { Checkout };
