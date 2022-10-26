import { Cookies } from "react-cookie";

const cookies = new Cookies();

const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
const getCookie = (name, option) => {
  return cookies.get(name, { ...option });
};

const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
};

export const Cookie = { setCookie, getCookie, removeCookie };
