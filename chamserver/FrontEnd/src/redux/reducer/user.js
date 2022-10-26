const getAllUserData = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL USER DATA":
      return [...payload];
    default:
      return state;
  }
};
export const user = { getAllUserData };
