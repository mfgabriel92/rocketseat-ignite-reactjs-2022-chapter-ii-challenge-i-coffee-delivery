import { Flex } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { CoffeeList } from "./CoffeeList";

function Home() {
  return (
    <Flex flexDirection="column">
      <Banner />
      <CoffeeList />
    </Flex>
  );
}

export { Home };
