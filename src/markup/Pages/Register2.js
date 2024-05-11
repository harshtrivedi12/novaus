import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
import axios from "axios";
import processVid from "../../gif process.mp4";
import { DNA, InfinitySpin, MutatingDots } from "react-loader-spinner";
var bnr = require("./../../images/background/bg6.jpg");

function Register2(props) {
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [email, setEmail] = useState("");
  const [runAiButton, setRunAiButton] = useState("Run Ai");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobtitle, setJobTitle] = useState("");
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
  const [showPassword, setShowPassword] = useState(false);
  const [spinner, setSpinner] = useState(false);
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleIdChange(event) {
    setJobSeekerId(event.target.value);
  }

  function handleSubmit(event) {
    setSpinner(true);
    event.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append("files", file);
    }

    axios
      .post("https://jobsbooklet.in/api/jobseeker/resume-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        setSpinner(false);
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
      company: company,
      jobtitle: jobtitle,
      email: email,
      phone: phone,
      password: password,
    };
    console.log(body);
    try {
      axios({
        url: "https://jobsbooklet.in/api/jobseeker/auth/signup",
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        data: body,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("jobSeekerLoginToken", res.data.data.token);

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
    setRunAiButton("Running Ai");
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
          }}>
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
              <div
                className="login-form style-2"
                style={{ display: "flex", flexDirection: "column" }}>
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
                      <form className=" dez-form " onSubmit={onSignUp}>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <div className="row">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="form-control"
                              placeholder="First Name"
                              required
                            />
                            {/* <div className="text-danger">
                              {errors.email && <div>{errors.email}</div>}
                            </div> */}
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <input
                              value={LastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="form-control"
                              placeholder="Last Name"
                              required
                            />
                            {/* <div className="text-danger">
                              {errors.email && <div>{errors.email}</div>}
                            </div> */}
                          </div>

                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <input
                              value={phone}
                              type="number"
                              className="form-control"
                              defaultValue="Password"
                              placeholder="Phone Number"
                              required
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            {/* <div className="text-danger">
                              {errors.password && <div>{errors.password}</div>}
                            </div> */}
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              type="email"
                              placeholder="Work Email Address"
                              required
                            />
                            {/* <div className="text-danger">
                              {errors.email && <div>{errors.email}</div>}
                            </div> */}
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="input-group d-flex align-items-center">
                              <span
                                className="input-group-addon position-absolute"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                  cursor: "pointer",
                                  right: "0px",
                                  zIndex: "11",
                                  position: "absolute",
                                }}>
                                <i
                                  className={
                                    showPassword
                                      ? "fa fa-eye-slash "
                                      : "fa fa-eye"
                                  }></i>
                              </span>
                              <input
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                className="form-control position-relative"
                                value={password}
                                placeholder="Type Your Password"
                                defaultValue="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                            {/* <div className="text-danger">
                              {errors.password && <div>{errors.password}</div>}
                            </div> */}
                          </div>
                          <div className="form-group text-left ">
                            {/* <button
                            type="submit"
                            className="site-button dz-xs-flex m-r5"
                          >
                            Sign me up
                          </button> */}

                            <span className="custom-control custom-checkbox mt-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="terms"
                                name="terms"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="terms">
                                I agree to the{" "}
                                {
                                  <Link to={"/employee/privacy-rights"}>
                                    Privacy Policy
                                  </Link>
                                }{" "}
                                and{" "}
                                <Link to={"/employee/term-of-use-nova-jobs"}>
                                  Terms & conditions{" "}
                                </Link>
                              </label>
                            </span>
                            {/* <Link
                            data-toggle="tab"
                            to="#forgot-password"
                            className="forget-pass m-l5"
                          >
                            <i className="fa fa-unlock-alt"></i> Forgot Password
                          </Link> */}
                          </div>
                          {/* <div className="dz-social clearfix">
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
                        </div> */}
                        </div>
                        <div className="text-center ">
                          <button
                            type="submit"
                            className="site-button dz-xs-flex m-r5">
                            Create Account
                          </button>
                        </div>
                      </form>
                      {/* <div className="text-center bottom">
                        <Link
                          to="/login"
                          className="site-button button-md btn-block text-white"
                        >
                          Sign In
                        </Link>
                      </div> */}
                    </div>
                  </div>
                ) : (
                  <div>
                    {AiBtn ? (
                      <form onSubmit={handleSubmit}>
                        <div>
                          <div className="form-group">
                            <input
                              type="file"
                              onChange={handleChange}
                              className="form-control"
                              accept=".pdf, .doc, .docx"
                            />
                          </div>
                          <p>{percentage}</p>
                        </div>
                        {spinner ? (
                          <MutatingDots
                            visible={true}
                            height="100"
                            width="100"
                            color="#1c2957"
                            secondaryColor="#1c2957"
                            radius="12.5"
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        ) : (
                          <button
                            type="submit"
                            className="site-button dz-xs-flex m-r5">
                            Upload Resume
                          </button>
                        )}
                      </form>
                    ) : (
                      <div>
                        <div>
                          <video
                            width="200px"
                            loop={showVideo}
                            autoPlay={showVideo}>
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
                              }}>
                              Go To Dashboard
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              runAi(e);
                            }}
                            className="site-button dz-xs-flex m-r5">
                            {runAiButton}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className="bottom-footer clearfix m-t10 m-b20 row text-center">
                  <div className="col-lg-12 text-center">
                    <span>
                      {/* {" "}
                      © Copyright by{" "} */}
                      {/*   <img
                    src="../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png"
                    alt=""
                    style={{
                      width: "40px",
                    }}
                  />  <img
                    src="../../images/WhatsApp_Image_2024-05-11_at_19.51.05-removebg-preview.png"
                    alt=""
                    style={{
                      width: "40px",
                    }}
                  /> */}
                      Already have an account ?
                      <a class="site-button-link " href="/user/login">
                        <i class="fa fa-unlock-alt"></i> Sign In
                      </a>
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
export default connect(mapStateToProps)(Register2);
