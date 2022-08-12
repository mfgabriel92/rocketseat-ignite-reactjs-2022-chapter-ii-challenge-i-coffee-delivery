import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useCoffee from "@hooks/useCoffee";
import { Coffee } from "./Coffee";

function CoffeeList() {
  const { data, isLoading } = useCoffee();

  return (
    <Box marginBottom="8.175rem">
      <Text as="h2" fontSize="3xl">
        Our coffees
      </Text>
      {isLoading ? (
        <Center marginTop="3rem">
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid
          marginTop="3.375rem"
          spacingX="2rem"
          spacingY="2.5rem"
          columns={[1, 2, 3, 3, 4]}
        >
          {data?.coffees?.map((coffee) => (
            <Coffee
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              image={coffee.image}
              price={coffee.price}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export { CoffeeList };
