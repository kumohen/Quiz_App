import {
  FETCH_QUESTIONS,
  ADD_MARK,
  FETCH_QUESTION,
  ATTEMP_QUES,
  CLEAR_STATE,
} from "../actions/types";

const initState = {
  questions: [],
  attempt_qus: [],
  mark: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case "CLEAR_QUESTION_STATE":
      return { ...state, questions: action.payload };
    case FETCH_QUESTION:
      return { ...state, getQuestion: action.payload };
    case ADD_MARK:
      return { ...state, mark: state.mark + 1 };
    case ATTEMP_QUES:
      return { ...state, attempt_qus: [...state.attempt_qus, action.payload] };
    case CLEAR_STATE:
      return { ...state, getQuestion: action.payload };
    case "TIME_OUT":
      return { ...state, timeOut: action.payload };
    default:
      return state;
  }
};
