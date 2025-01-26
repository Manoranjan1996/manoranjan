const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  const { carts } = state;

  switch (action.type) {
    case "ADD_CART": {
      const itemIndex = carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // Item already exists, increment quantity
        const updatedCarts = carts.map((item, index) =>
          index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
        );
        return { ...state, carts: updatedCarts };
      }

      // Add new item with quantity 1
      return { ...state, carts: [...carts, { ...action.payload, qnty: 1 }] };
    }

    case "RMV_CART": {
      // Remove item by id
      const updatedCarts = carts.filter((item) => item.id !== action.payload);
      return { ...state, carts: updatedCarts };
    }

    case "RMV_ONE": {
      const itemIndex = carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const updatedCarts =
          carts[itemIndex].qnty > 1
            ? carts.map((item, index) =>
                index === itemIndex ? { ...item, qnty: item.qnty - 1 } : item
              )
            : carts.filter((item) => item.id !== action.payload.id);

        return { ...state, carts: updatedCarts };
      }

      return state; // No changes if item not found
    }

    default:
      return state;
  }
};
