import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@contexts/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import makeServer from "./services/mirage";
import { defaultTheme } from "./styles/themes/default";

makeServer();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartProvider>
            <Router />
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
