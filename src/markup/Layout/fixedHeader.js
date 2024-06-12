import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { showToastSuccess } from "../../utils/toastify";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImageValue } from "../../store/reducers/jobProfileSlice";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import { setFixedHeaderValues } from "../../store/reducers/fixedHeaderSlice";
import SimpleLoadingSkeleton from "../skeleton/simpleLoadingSkeleton";
import processVid from "../../gif process.mp4";
import { connect } from "react-redux";
import { DNA, InfinitySpin, MutatingDots } from "react-loader-spinner";

var bnr = require("./../../images/banner/bnr1.jpg");

const FixedHeader = () => {
  const fileInputRef = useRef(null);
  const [runAiButton, setRunAiButton] = useState("Run AI");

  const [file, setFile] = useState();
  
  const [AiBtn, setAiBtn] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showPercentage, setShowPercentage] = useState(false);
  const [percentage, setPercentage] = useState();
  const navigate = useNavigate();
  const [resumeUrl, setResumeUrl] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [basicdetails, setBasicDetails] = useState(false);
  const [imgData, setImgData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const profileImageValue = useSelector(
    (state) => state.jobProfileSlice.profileImageValue
  );
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    dispatch(setProfileImageValue(file));
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgData(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const fixedHeaderValues = useSelector(
    (state) => state.fixedHeaderSlice.fixedHeaderValues
  );
  const jobProfileValues = useSelector(
    (state) => state.jobProfileSlice.jobProfileValues
  );

  const token = localStorage.getItem("jobSeekerLoginToken");
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/user-profile",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        let data = response.data.data;
        dispatch(
          setFixedHeaderValues({
            first_name: data.first_name,
            last_name: data.last_name,
            professional_title: data.proffesional_title,
            email: data.email,
            country_id: data.country_id,
            state_id: data.state_id,
            phone: data.phone,
            photo: data.photo,
            n_profile_strength: data.n_profile_strength,
          })
        );
        setShowSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  }, [jobProfileValues]);

  const [countries, setCountries] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const [states, setStates] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const getCountry = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/countries",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        let country = response.data.data;
        setCountries(country);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };

  const getState = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/jobseeker/stats/${fixedHeaderValues.country_id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setStates(response.data.data);
      })
      .catch((err) => {
        console.log(err, "STATE");
        setStates([]);
      });
  };
  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    dispatch(
      setFixedHeaderValues({
        ...fixedHeaderValues,
        state_id: 0,
      })
    );
    getState();
  }, [fixedHeaderValues.country_id]);

  const getSingleCountry = (countryId) => {
    return countries.find((country) => country.id === countryId)?.name || "";
  };

  const getSingleState = (stateId) => {
    return states.find((state) => state.id === stateId)?.name || "";
  };

  const imagePath = fixedHeaderValues.photo;

  // Define the base URL
  const baseUrl = "https://novajobs.us";

  // Create the full URL
  const fullImageUrl = baseUrl + imagePath;

  console.log(fullImageUrl);



  function handleChange(event) {
    setFile(event.target.files[0]);
  }

 

  function handleSubmit(event) {
    setSpinner(true);
    event.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append("files", file);
    }

    axios
      .post("https://novajobs.us/api/jobseeker/resume-upload", formData, {
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
        console.log(error.response.data.message);
        showToastError(error?.response?.data?.message);
      });
  }

  const dispatch = useDispatch();

  const runAi = async (e) => {
    setRunAiButton("Running Ai");
    setShowVideo(true);
    e.preventDefault();
    console.log(resumeUrl);
    await axios({
      method: "post",
      url: "https://novajobs.us/api/jobseeker/file-based-ai",
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
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };
  return (
    <div
      className="overlay-black-dark profile-edit p-t50 p-b20"
      style={{ backgroundImage: "url(" + bnr + ")" }}
    >
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="candidate-info">
            {showSkeleton === true ? (
              <SimpleLoadingSkeleton />
            ) : (
              <div className="d-flex">
                <div className="candidate-detail">
                  <div className="canditate-des text-center">
                    <Link to={"#"}>
                      {fixedHeaderValues.photo ? (
                        <img
                          src={fullImageUrl}
                          style={{
                            height: "100px",
                          }}
                        />
                      ) : (
                        <img
                          alt=""
                          src={require("./../../images/team/pic1.jpg")}
                        />
                      )}
                    </Link>

                    {/* <div
                    className="upload-link"
                    title="update"
                    data-toggle="tooltip"
                    data-placement="right"
                  >
                    <input
                      type="file"
                      className="update-flie"
                      onChange={handleImageChange}
                    />
                    <i className="fa fa-camera"></i>
                  </div> */}
                  </div>
                  <div className="text-white browse-job text-left">
                    {fixedHeaderValues.first_name ||
                    fixedHeaderValues.last_name ? (
                      <h4 className="m-b0">
                        {fixedHeaderValues.first_name}{" "}
                        {fixedHeaderValues.last_name}
                        <Link
                          to={"#"}
                          onClick={() => setBasicDetails(true)}
                          className="m-l15 font-16 text-white"
                        ></Link>
                      </h4>
                    ) : null}
                    {fixedHeaderValues.professional_title ? (
                      <p className="m-b15">
                        {fixedHeaderValues.professional_title}
                      </p>
                    ) : null}
                    <ul className="clearfix">
                      {fixedHeaderValues.country_id ||
                      fixedHeaderValues.state_id ? (
                        <li>
                          <i className="ti-location-pin"></i>{" "}
                          {getSingleCountry(fixedHeaderValues.country_id)}
                          {getSingleState(fixedHeaderValues.state_id)}
                        </li>
                      ) : null}
                      {fixedHeaderValues.phone ? (
                        <li>
                          <i className="ti-mobile"></i>{" "}
                          {fixedHeaderValues.phone}
                        </li>
                      ) : null}
                      {/* <li>
                    <i className="ti-briefcase"></i> Fresher
                  </li> */}
                      {fixedHeaderValues.email ? (
                        <li>
                          <i className="ti-email"></i> {fixedHeaderValues.email}
                        </li>
                      ) : null}
                    </ul>
                    <div className="progress-box m-t10">
                      <div className="progress-info">
                        Profile Strength (Average)
                        <span>{fixedHeaderValues.n_profile_strength}</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{
                            width: `${fixedHeaderValues.n_profile_strength}%`,
                          }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex ml-5 pl-5">
                  <div
                    style={{
                      borderRight: "1px solid white",
                      marginRight: "8px",
                      height: "180px",
                    }}
                  ></div>
                  <div>
                    
                    {
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
                                className="site-button dz-xs-flex m-r5"
                              >
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
                                {runAiButton}
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* pending actions commented out here */}
          {/* <div className="col-lg-4 col-md-5">
            <Link to={"#"}>
              <div className="pending-info text-white p-a25">
                <h5>Pending Action</h5>
                <ul className="list-check secondry">
                  <li>Verify Mobile Number</li>
                  <li>Add Preferred Location</li>
                  <li>Add Resume</li>
                </ul>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <Modal
        className="modal fade browse-job modal-bx-info editor"
        show={basicdetails}
        onHide={setBasicDetails}
      >
        <div className="modal-dialog my-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ProfilenameModalLongTitle">
                Basic Details
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setBasicDetails(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="fresher"
                              name="example1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="fresher"
                            >
                              Fresher
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="experienced"
                              name="example1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="experienced"
                            >
                              Experienced
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Select Your Country</label>
                      <Form.Control as="select">
                        <option>India</option>
                        <option>Australia</option>
                        <option>Bahrain</option>
                        <option>China</option>
                        <option>Dubai</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Hong Kong</option>
                        <option>Kuwait</option>
                      </Form.Control>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Select Your Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Your Country"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Select Your City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Your City"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Telephone Number</label>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country Code"
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Area Code"
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Email Address</label>
                      <h6 className="m-a0 font-14">info@example.com</h6>
                      <Link to={"#"}>Change Email Address</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="site-button"
                onClick={() => setBasicDetails(false)}
              >
                Cancel
              </button>
              <button type="button" className="site-button">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(FixedHeader);
