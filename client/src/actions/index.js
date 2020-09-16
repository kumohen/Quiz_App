// import axios from "axios";
import axios from "../utils/endpoint";
import history from "../utils/history";

import {
  FETCH_QUESTIONS,
  ADD_MARK,
  FETCH_QUESTION,
  ATTEMP_QUES,
  CLEAR_STATE,
} from "./types";

export const fetchQustions = () => async (dispatch) => {
  const response = await axios.get("/questions");
  dispatch({
    type: FETCH_QUESTIONS,
    payload: response.data,
  });
};
export const fetchQustion = (id) => async (dispatch) => {
  const response = await axios.get(`/question/${id}`);
  dispatch({
    type: FETCH_QUESTION,
    payload: response.data,
  });
};
export const addMark = () => {
  return {
    type: ADD_MARK,
  };
};

export const attempQues = (id) => {
  return {
    type: ATTEMP_QUES,
    payload: id,
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
    payload: {},
  };
};
export const clearQsState = () => {
  return {
    type: "CLEAR_QUESTION_STATE",
    payload: null,
  };
};

export const timeOut = (time) => {
  return {
    type: "TIME_OUT",
    payload: time,
  };
};

// auth section

export const userLogin = (email, password) => async (dispatch) => {
  const response = await axios.post("/signin", { email, password });

  if (response.data.error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: response.data.error,
    });
  } else {
    dispatch({
      type: "USER_LOGIN",
      payload: response.data,
      success: response.data.msg,
    });
    console.log(response.data);
    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    history.push("/start");
  }
};
export const userRegister = (
  name,
  lastname,
  email,
  password,
  mobileNumber,
  age,
  branch,
  gender,
  image
) => async (dispatch) => {
  console.log(image);
  const response = await axios.post("/signup", {
    name,
    lastname,
    password,
    email,
    mobileNumber,
    age,
    branch,
    gender,
    image,
  });
  console.log(response);
  if (response.data.error) {
    dispatch({
      type: "FAIL_REGISTER",
      payload: response.data.error,
    });
  } else {
    dispatch({
      type: "USER_REGISTER",
      payload: response.data,
    });

    history.push("/");
  }
};

export const resetPassword = (email) => async (dispatch) => {
  const response = await axios.post("/reset", {
    email,
  });

  dispatch({
    type: "RESET_PASSWORD",
    payload: response.data,
  });

  history.push("/");
};

export const UpdatePassword = (password, token) => async (dispatch) => {
  const response = await axios.post("/updatePassword", {
    password,
    token,
  });

  dispatch({
    type: "UPDATE_PASSWORD",
    payload: response.data,
  });

  history.push("/");
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "USER_LOGOUT",
    msg: "You successfully logout",
  });

  history.push("/");
};
