import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { useEffect } from "react";

const Result = ({ mark }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    swal("", "You successfully submitted You test", "success");
  }, []);
  // setTimeout(() => {
  //   swal("", "You successfully submitted You test", "success");
  // }, 500);
  const image = JSON.parse(localStorage.getItem("user")).image;
  const username = JSON.parse(localStorage.getItem("user")).name;
  return (
    <div className="login_container">
      <Button variant="primary" onClick={handleShow} id="check_score">
        Check Result
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="modal_full">
          <img src={image} alt="makkdkd" srcset="" id="result_img" />
          <p>{username}</p>
          <p id="mark">Your mark : {mark && mark} / 10 </p>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mark: state.questions.mark,
  };
};
export default connect(mapStateToProps)(Result);
