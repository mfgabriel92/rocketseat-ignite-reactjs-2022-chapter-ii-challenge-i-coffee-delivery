export interface CoffeeItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface SimpleCoffeeItem {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: number;
}
