import api from "@services/api";
import { useQuery } from "@tanstack/react-query";

interface Coffee {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
}

async function getCoffees(): Promise<{ coffees: Coffee[] }> {
  const { data } = await api.get<{ coffees: Coffee[] }>("/coffees");
  return { coffees: data.coffees };
}

function useCoffee() {
  return useQuery(["coffees"], () => getCoffees(), {
    staleTime: 1000 * 60 * 1,
  });
}

export default useCoffee;
