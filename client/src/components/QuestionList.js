import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQustion } from "../actions";

import { Button } from "react-bootstrap";

const QuestionList = ({ data, fetchQustion, attempt }) => {
  useEffect(() => {
    console.log("do so");
  }, [attempt]);
  const submitButton = (id) => {
    fetchQustion(id);
  };
  const renderList = () =>
    data &&
    data.map((item, index) => (
      <React.Fragment key={index}>
        <Button
          onClick={() => submitButton(item._id)}
          variant={attempt.includes(item._id) ? "success" : "outline-danger"}
          className={index % 2 === 0 ? "left_index" : "right_index"}
        >
          {index + 1}
        </Button>
        <br />
      </React.Fragment>
    ));
  return (
    <div className="question_no">
      <p id="ques_list">Question List</p>
      {renderList()}
      <br />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state.questions.getQuestion,
    attempt: state.questions.attempt_qus,
  };
};
export default connect(mapStateToProps, { fetchQustion })(QuestionList);
