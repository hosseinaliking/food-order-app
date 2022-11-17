export const initState = {
  food: [],
  basket: [],
  totalAmount: 0,
};

export const foodReducerFunction = (state, action) => {
  // Add state
  if (action.type === "ADD_TO_BASKET") {
    // Get current basket from state
    const currentBasket = state.basket;

    // Check item is exist or no
    const checkItem =
      currentBasket.find((item) => item.id == action.payload.id) || null;

    // If not exist
    if (!checkItem) {
      const item = state.food.find((item) => item.id == action.payload.id);

      const newItem = { ...item, amount: action.payload.amount };

      const newBasket = [...currentBasket, newItem];

      const totalPrice = newBasket
        .map((item) => item.price * item.amount)
        .reduce((pre, cur) => pre + cur, 0);

      return { ...state, basket: newBasket, totalAmount: totalPrice };
    } else {
      // If exist
      const newBasket = currentBasket.map((item) => {
        return item.id == action.payload.id
          ? { ...item, amount: item.amount + action.payload.amount }
          : item;
      });

      const totalPrice = newBasket
        .map((item) => item.price * item.amount)
        .reduce((pre, cur) => pre + cur, 0);

      return { ...state, basket: newBasket, totalAmount: totalPrice };
    }
  }

  // Remove state
  if (action.type === "REMOVE_FROM_BASKET") {
    const currentBasket = state.basket;
    const curItem = currentBasket.find((item) => item.id == action.payload.id);
    console.log(curItem);

    if (curItem.amount === 1) {
      const newBasket = currentBasket.filter(
        (item) => item.id !== action.payload.id
      );

      const totalPrice = newBasket
        .map((item) => item.price * item.amount)
        .reduce((pre, cur) => pre + cur, 0);

      return { ...state, basket: newBasket, totalAmount: totalPrice };
    } else {
      const newBasket = currentBasket.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount - 1 }
          : item
      );

      const totalPrice = newBasket
        .map((item) => item.price * item.amount)
        .reduce((pre, cur) => pre + cur, 0);

      return { ...state, basket: newBasket, totalAmount: totalPrice };
    }
  }

  if (action.type === 'ORDER_SET') {
    return {...state, totalAmount: 0, basket: []}
  }

  return state;
};
