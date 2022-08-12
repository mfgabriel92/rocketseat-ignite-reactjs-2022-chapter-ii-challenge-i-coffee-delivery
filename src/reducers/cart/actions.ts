import { CoffeeItem, SimpleCoffeeItem } from "@customTypes/coffee";

/* eslint-disable no-unused-vars */
enum CartActions {
  UPDATE_CART = "UPDATE_CART",
  INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY",
  DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

function updateCartAction(item: CoffeeItem) {
  return {
    type: CartActions.UPDATE_CART,
    payload: {
      item,
    },
  };
}

function increaseItemQuantityAction(id: number, item?: SimpleCoffeeItem) {
  return {
    type: CartActions.INCREASE_ITEM_QUANTITY,
    payload: {
      id,
      item,
    },
  };
}

function decreaseItemQuantityAction(id: number) {
  return {
    type: CartActions.DECREASE_ITEM_QUANTITY,
    payload: {
      id,
    },
  };
}

function removeCartAction(id: number) {
  return {
    type: CartActions.REMOVE_ITEM,
    payload: {
      id,
    },
  };
}

function clearCartAction() {
  return {
    type: CartActions.CLEAR_CART,
    payload: {},
  };
}

export {
  CartActions,
  updateCartAction,
  increaseItemQuantityAction,
  decreaseItemQuantityAction,
  removeCartAction,
  clearCartAction,
};
