const initialState = {
  isLoginin: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        login: action.payload,
        isLoginin: true,
        msg: action.success,
      };
    case "USER_AUTH":
      return { ...state, login: action.payload };
    case "USER_LOGOUT":
      return { ...state, isLoginin: false, msg: action.msg };
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "USER_REGISTER":
      return {
        ...state,
        register: action.payload,
        isRegistation: true,
      };

    case "FAIL_REGISTER":
    case "LOGIN_FAIL":
      return { ...state, isRegistation: false, error: action.payload };
    default:
      return state;
  }
}
