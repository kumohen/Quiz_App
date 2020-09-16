import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import swal from "@sweetalert/with-react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    show: true,
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    const { password, email } = this.state;
    if (password === "" || !email === "") {
      return swal("", "You did not enter Your email and Password", "warning");
    }
    this.props.userLogin(email, password);
  };

  render() {
    return (
      <div className="login_container">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ duration: 1 }}
          className="login"
        >
          <Form onSubmit={this.submitForm} className="login_form">
            <p className="login_title">Login Your Account to start Test</p>
            <Form.Group as={Col}>
              <Form.Control
                type="email1"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Form.Group>
            <hr />
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleInput}
                style={{ marginLeft: "0px", width: "99%" }}
              />
            </Form.Group>

            <hr />
            <Button type="submit" className="login_btn" block>
              Login
            </Button>
            <p className="login_footer">
              If You don't have account ,Please{" "}
              <Link to="/signup">
                <b style={{ color: "black" }}> Signup </b>
              </Link>
              first
            </p>
          </Form>
          <p>
            {" "}
            <Link to="/resets" className="forget_">
              Forgot Password
            </Link>
          </p>
        </motion.div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { userLogin })(Login);
