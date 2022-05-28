import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [ //cambiar por carrito en BD
    { id: 1, name: "Porsche 911", price: 100000 },
    { id: 2, name: "Porsche 911-GT", price: 200000 },
    { id: 3, name: "Porsche Cayman", price: 300000 },
    { id: 4, name: "Porsche Taycan", price: 400000 },
    { id: 5, name: "Porsche Carrera GT", price: 500000 },
    { id: 6, name: "Porsche Panamera T", price: 600000 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    case TYPES.BUY_CART:
      //logica de verificar stock con la base de datos
      return shoppingInitialState
    default:
      return state;
  }
}
