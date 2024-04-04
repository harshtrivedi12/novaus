import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
import axios from "axios";
import processVid from "../../gif process.mp4";
var bnr = require("./../../images/background/bg6.jpg");

function EmployeeRegister2(props) {
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showUpload, setShowUpload] = useState(true);
  const [file, setFile] = useState();
  const [jobSeekerId, setJobSeekerId] = useState("");
  const token = localStorage.getItem("jobSeekerLoginToken");
  const [AiBtn, setAiBtn] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showPercentage, setShowPercentage] = useState(false);
  const [percentage, setPercentage] = useState();
  const navigate = useNavigate();
  const [resumeUrl, setResumeUrl] = useState("");
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleIdChange(event) {
    setJobSeekerId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("job_seeker_id", jobSeekerId);
    if (file) {
      formData.append("files", file);
    }

    axios
      .post("https://jobsbooklet.in/api/employeer/resume-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        alert("uploaded");
        setResumeUrl(res.data.data[0].file_path);
        setAiBtn(false);
        console.log(resumeUrl, res, res.data.data[0].file_path);
      })
      .catch((error) => {
        alert("error");
        console.error(error);
      });
  }

  const dispatch = useDispatch();

  async function onSignUp(e) {
    e.preventDefault();
    const body = {
      first_name: firstName,
      last_name: LastName,
      email: email,
      phone: phone,
      password: password,
    };
    console.log(body);
    try {
      axios({
        url: "ttps://jobsbooklet.in/api/employeer/auth/signup",
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        data: body,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("employeeLoginToken", res.data.data.token);

          setShowUpload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const runAi = async (e) => {
    setShowVideo(true);
    e.preventDefault();
    console.log(resumeUrl);
    await axios({
      method: "post",
      url: "https://jobsbooklet.in/api/jobseeker/file-based-ai",
      data: {
        keyword: "Rate this resume content in percentage ?",
        file_location: resumeUrl,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data.data.content_acuracy_percentage);
        setShowPercentage(true);
        setPercentage(
          `Your Ai Resume score is ${res.data.data.content_acuracy_percentage}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page-wraper">
      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: `url(${bnr})`,
            height: "100vh",
          }}
        >
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
              <div className="login-form style-2">
                <div className="logo-header text-center p-tb30">
                  {/* <Link to={"./"}><img src={require("./../../images/logo.png")} alt="" /></Link> */}
                  <Link to={"./"}>
                    <img
                      src={require("./../../images/logo/NovaUS.png")}
                      className="logo"
                      alt=""
                    />
                  </Link>
                </div>

                {showUpload ? (
                  <div className="tab-content nav p-b30 tab">
                    <div id="login" className="tab-pane active ">
                      {props.errorMessage && (
                        <div className="">{props.errorMessage}</div>
                      )}
                      {props.successMessage && (
                        <div className="">{props.successMessage}</div>
                      )}
                      <form className=" dez-form p-b30" onSubmit={onSignUp}>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>

                        <div className="form-group">
                          <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                            placeholder="First Name"
                          />
                          <div className="text-danger">
                            {errors.email && <div>{errors.email}</div>}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                            placeholder="Last Name"
                          />
                          <div className="text-danger">
                            {errors.email && <div>{errors.email}</div>}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            value={phone}
                            className="form-control"
                            defaultValue="Password"
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <div className="text-danger">
                            {errors.password && <div>{errors.password}</div>}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Email"
                          />
                          <div className="text-danger">
                            {errors.email && <div>{errors.email}</div>}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            value={password}
                            className="form-control"
                            defaultValue="Password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="text-danger">
                            {errors.password && <div>{errors.password}</div>}
                          </div>
                        </div>
                        <div className="form-group text-left">
                          <button
                            type="submit"
                            className="site-button dz-xs-flex m-r5"
                          >
                            Sign me up
                          </button>
                          <span className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="check1"
                              name="example1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check1"
                            >
                              Remember me
                            </label>
                          </span>
                          <Link
                            data-toggle="tab"
                            to="#forgot-password"
                            className="forget-pass m-l5"
                          >
                            <i className="fa fa-unlock-alt"></i> Forgot Password
                          </Link>
                        </div>
                        <div className="dz-social clearfix">
                          <h5 className="form-title m-t5 pull-left">
                            Sign In With
                          </h5>
                          <ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white">
                            <li>
                              <Link
                                to={""}
                                className="fa fa-facebook  fb-btn mr-1"
                                target="bank"
                              ></Link>
                            </li>
                            <li>
                              <Link
                                to={""}
                                className="fa fa-twitter  tw-btn mr-1"
                                target="bank"
                              ></Link>
                            </li>
                            <li>
                              <Link
                                to={""}
                                className="fa fa-linkedin link-btn mr-1"
                                target="bank"
                              ></Link>
                            </li>
                            <li>
                              <Link
                                to={""}
                                className="fa fa-google-plus  gplus-btn"
                                target="bank"
                              ></Link>
                            </li>
                          </ul>
                        </div>
                      </form>
                      <div className="text-center bottom">
                        <Link
                          to="/login"
                          className="site-button button-md btn-block text-white"
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {AiBtn ? (
                      <form onSubmit={handleSubmit}>
                        <div>
                          <div className="form-group">
                            <input
                              type="text"
                              value={jobSeekerId}
                              className="form-control"
                              onChange={handleIdChange}
                              placeholder="Job Seeker ID"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <p>{percentage}</p>
                        </div>

                        <button
                          type="submit"
                          className="site-button dz-xs-flex m-r5"
                        >
                          Upload Resume
                        </button>
                      </form>
                    ) : (
                      <div>
                        <div>
                          <video
                            width="200px"
                            loop={showVideo}
                            autoPlay={showVideo}
                          >
                            <source src={processVid} type="video/mp4" />
                          </video>
                        </div>
                        {showPercentage ? (
                          <div>
                            <p>{percentage}</p>
                            <button
                              className="site-button dz-xs-flex m-r5"
                              onClick={(e) => {
                                navigate("/");
                              }}
                            >
                              Go To Dashboard
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              runAi(e);
                            }}
                            className="site-button dz-xs-flex m-r5"
                          >
                            Run Ai
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className="bottom-footer clearfix m-t10 m-b20 row text-center">
                  <div className="col-lg-12 text-center">
                    <span>
                      {" "}
                      © Copyright by{" "}
                      <i className="fa fa-heart m-lr5 text-red heart"></i>
                      <Link to={""}>Nova Jobs </Link> All rights reserved.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(EmployeeRegister2);
