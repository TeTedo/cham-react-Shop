const shopPermission = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PERMISSION":
      return { ...payload };
    case "PERMISSIONCHECK":
      return { ...payload };
    default:
      return state;
  }
};
const shopData = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOPDATA":
      return { ...payload };
    default:
      return state;
  }
};
const permissionData = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PERMISSION":
      return { ...payload };
    default:
      return state;
  }
};
const shopSlide = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETSLIDE":
      return { ...payload };
    case "ADDSLIDE":
      return { ...state, ...payload };
    default:
      return state;
  }
};

const shopCart = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CART":
      return { ...payload };
    default:
      return state;
  }
};
const shopOrder = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOPBOUGHT":
      return { ...payload };
    default:
      return state;
  }
};
const buying = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOPBUY":
      return [...state, { ...payload }];
    case "SHOPBUYEND":
      return [];
    default:
      return state;
  }
};
const productionData = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOPPRODUCTION":
      return [...payload];
    default:
      return state;
  }
};
const sellerData = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "FINDAPPLYSELLER":
      return [...payload];
    default:
      return state;
  }
};
const totalSellData = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOTALSELLDATA":
      return [...payload];
    default:
      return state;
  }
};

export const shop = {
  shopPermission,
  shopData,
  shopSlide,
  shopCart,
  buying,
  productionData,
  permissionData,
  sellerData,
  totalSellData,
  shopOrder,
};
