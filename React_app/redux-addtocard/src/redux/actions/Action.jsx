export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

//Remove item from cart
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
