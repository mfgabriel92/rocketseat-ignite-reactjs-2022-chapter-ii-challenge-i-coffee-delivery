import { CoffeeItem } from "@customTypes/coffee";
import { produce } from "immer";
import { CartActions } from "./actions";

interface CartState {
  items: CoffeeItem[];
}

function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActions.UPDATE_CART: {
      const { items } = state;
      const { item } = action.payload;
      const itemIndex = items.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        return produce(state, (draft) => {
          draft.items[itemIndex] = item;
          localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
        });
      }

      return produce(state, (draft) => {
        draft.items.push(item);
        localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
      });
    }
    case CartActions.INCREASE_ITEM_QUANTITY: {
      const { items } = state;
      const { id, item } = action.payload;
      const itemIndex = items.findIndex((i) => i.id === id);

      if (itemIndex === -1) {
        return produce(state, (draft) => {
          const newItem: CoffeeItem = {
            id: item.id,
            name: item.name,
            image: item.image,
            description: item.description,
            price: item.price,
            quantity: 1,
            totalPrice: 1 * item.price,
          };

          draft.items.push(newItem);
          localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
        });
      }

      return produce(state, (draft) => {
        const item = draft.items[itemIndex];
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
        localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
      });
    }
    case CartActions.DECREASE_ITEM_QUANTITY: {
      const { items } = state;
      const { id } = action.payload;
      const itemIndex = items.findIndex((i) => i.id === id);

      return produce(state, (draft) => {
        const item = draft.items[itemIndex];
        const newQuantity = item.quantity - 1;

        if (newQuantity === 0) {
          draft.items.splice(itemIndex, 1);
          localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
          return;
        }

        item.quantity = newQuantity;
        item.totalPrice = item.quantity * item.price;
        localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
      });
    }
    case CartActions.REMOVE_ITEM: {
      const { items } = state;
      const { id } = action.payload;
      const itemIndex = items.findIndex((i) => i.id === id);

      if (itemIndex !== -1) {
        return produce(state, (draft) => {
          draft.items.splice(itemIndex, 1);
          localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
        });
      }

      return state;
    }
    case CartActions.CLEAR_CART:
      return produce(state, (draft) => {
        draft.items = [];
        localStorage.setItem("@coffeeDelivery_cart", JSON.stringify(draft));
      });
    default:
      return state;
  }
}

export default cartReducer;
