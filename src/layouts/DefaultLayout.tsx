import { Container } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <Container width="100%" maxWidth="1120px">
      <Header />
      <Outlet />
    </Container>
  );
}

export { DefaultLayout };
