import { combineReducers } from "redux";

import questions from "./Question";
import auth from "./auth";

export default combineReducers({
  auth,
  questions,
});
