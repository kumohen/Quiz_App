import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addMark, attempQues } from "../actions";

const List = ({ item, addMark, attempQues }) => {
  const [select, setSelect] = useState("");

  const handleRadio = (e) => {
    setSelect(e.target.value);
  };
  const handleSubmit = (correct, id) => {
    attempQues(id);
    if (correct === select) {
      addMark();
    }

    setSelect("");
  };

  return (
    <div>
      <h2>{item.que_title}</h2>
      <div onChange={handleRadio}>
        <input type="radio" value="a" name="a" /> {item.option1}
      </div>
      <div onChange={handleRadio}>
        <input type="radio" value="b" name="a" /> {item.option2}
      </div>
      <div onChange={handleRadio}>
        <input type="radio" value="c" name="a" /> {item.option3}
      </div>
      <div onChange={handleRadio}>
        <input type="radio" value="d" name="a" /> {item.option4}
      </div>

      <hr />
      <button onClick={() => handleSubmit(item.ans, item._id)}>submit</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { addMark, attempQues })(List);
