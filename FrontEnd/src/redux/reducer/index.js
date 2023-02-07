import login from "./login";
import { shop } from "./shop";
import { user } from "./user";
import { error } from "./error";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({ login, ...shop, ...user, ...error });

export default rootReducer;
