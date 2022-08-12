import { CoffeeItem, SimpleCoffeeItem } from "@customTypes/coffee";
import {
  updateCartAction,
  removeCartAction,
  increaseItemQuantityAction,
  decreaseItemQuantityAction,
  clearCartAction,
} from "@reducers/cart/actions";
import cartReducer from "@reducers/cart/reducer";
import { createContext, ReactElement, useContext, useReducer } from "react";

interface CartContextProps {
  items: CoffeeItem[];
  numberOfItems: number;
  totalPriceWithoutFee: number;
  updateCart: (item: CoffeeItem) => void;
  increaseItemQuantity: (id: number, item?: SimpleCoffeeItem) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: { children: ReactElement }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] }, () => {
    const storedCart = localStorage.getItem("@coffeeDelivery_cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  });

  function updateCart(item: CoffeeItem) {
    dispatch(updateCartAction(item));
  }

  function increaseItemQuantity(id: number, item?: SimpleCoffeeItem) {
    dispatch(increaseItemQuantityAction(id, item));
  }

  function decreaseItemQuantity(id: number) {
    dispatch(decreaseItemQuantityAction(id));
  }

  function removeItem(id: number) {
    dispatch(removeCartAction(id));
  }

  function clearCart() {
    dispatch(clearCartAction());
  }

  const { items } = cartState;
  const totalPriceWithoutFee = items.reduce((prev, cur) => {
    return (prev += cur.totalPrice);
  }, 0);
  const numberOfItems = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        numberOfItems,
        totalPriceWithoutFee,
        updateCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { useCart, CartProvider };
