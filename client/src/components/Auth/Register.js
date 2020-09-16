import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userRegister } from "../../actions";
import { Link } from "react-router-dom";
import ImageQuiz from "../../image/quiz.png";
import { sName } from "../../utils/utills";
import swal from "@sweetalert/with-react";

const Register = ({ userRegister }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    if (url) {
      uploadFields();
    }
  });

  const uploadPic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "voting");
    data.append("cloud_name", "dvfpkko1z");
    fetch("https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadFields = () => {
    if (!name || !email || !password) {
      return swal("", "You did fill all the field", "warning");
    }
    userRegister(
      name,
      lastname,
      email,
      password,
      mobileNumber,
      age,
      branch,
      gender,
      url
    );

    setName("");
    setGender("");
    setAge("");
    setLastName("");
    setPassword("");
    setEmail("");
    setmobileNumber("");
    setBranch("");
  };

  const PostData = () => {
    if (image) {
      uploadPic();
    } else {
      uploadFields();
    }
  };

  return (
    <div className="registration">
      <div className="regis_left">
        <img src={ImageQuiz} alt="quiz" id="regis_img" />
      </div>
      <div className="regis_right">
        <div className="regis_title">
          <p>Registration Now</p>
        </div>
        <div className="registration_con">
          <div className="row registration_row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="registration_input4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="registration_input2"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <hr />
            </div>
          </div>
          <div className="row registration_row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="registration_input4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr />
            </div>
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="registration_input2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr />
            </div>
          </div>
          <div className="row registration_row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="mobile number"
                id="registration_input2"
                value={mobileNumber}
                onChange={(e) => setmobileNumber(e.target.value)}
              />
              <hr />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Enter You Age"
                id="registration_input1"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Branch</label>
                <select
                  id="inputState"
                  onChange={(e) => setBranch(e.target.value)}
                  value={branch}
                  className="form-control"
                >
                  {sName.map((item) => (
                    <option value={item} key={item}>
                      {" "}
                      {item}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Gender</label>
                <select
                  id="inputState"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  className="form-control"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="file-field input-field">
            <div
              className="btn #64b5f6 input-field2"
              style={{ marginLeft: "20px" }}
            >
              <span>Your Image</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                style={{ border: "1px solid white" }}
              />
            </div>
          </div>

          <button className="btn_regis " onClick={() => PostData()}>
            Registration
          </button>
          <p className="login_footer ">
            If You have account ,Please go to
            <Link to="/">
              <b style={{ color: "black" }}> Signin </b>
            </Link>
            pages
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { userRegister })(Register);
