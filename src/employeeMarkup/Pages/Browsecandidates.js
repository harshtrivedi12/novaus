import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { FaSave, FaSearch, FaTimes } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Tab, Nav, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import FixedHeader from "../Layout/fixedHeader";

import moment from "moment";
import testImg from "../../images/team/pic1.jpg";
import "react-quill/dist/quill.snow.css";

import { submit } from "redux-form";
import JobPageSkeleton from "../../markup/skeleton/jobPage";
import TwoBoxWithLinesSkeleton from "../../markup/skeleton/twoBoxLines";

import PageTitle from "../Layout/PageTitle";
import SkeletonImg from "../../images/jobpage/No data-pana.png";
import {
  setBrowseCandidateData,
  setBrowseCandidateValues,
} from "../../store/reducers/browseCandidateSlice";
var bnr = require("./../../images/banner/bnr1.jpg");
const postBox = [
  { image: require("./../../images/testimonials/pic1.jpg") },
  { image: require("./../../images/testimonials/pic2.jpg") },
  { image: require("./../../images/testimonials/pic3.jpg") },
  { image: require("./../../images/testimonials/pic1.jpg") },
  { image: require("./../../images/testimonials/pic2.jpg") },
  { image: require("./../../images/testimonials/pic3.jpg") },
];

function EmployeeBrowsecandidates() {
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(selectedJob, "selectedJob");
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("contact-info"); // Initial active tab
  const dispatch = useDispatch();
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

  const [cities, setCities] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const token = localStorage.getItem("employeeLoginToken");
  const [hasDataFetched, setHasDataFetched] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const browseCandidateValues = useSelector(
    (state) => state.browseCandidateSlice.browseCandidateValues
  );
  const browseCandidateData = useSelector(
    (state) => state.browseCandidateSlice.browseCandidateData
  );
  console.log(hasDataFetched, "data fetched");

  useEffect(() => {
    setSelectedJob(browseCandidateData[0]);
  }, [browseCandidateData]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  const getCountry = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/countries",
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
        setCities([]);
      });
  };

  const getState = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/employeer/stats/231`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data.data, "STATE");
        setStates(response.data.data);
      })
      .catch((err) => {
        setStates([]);
        setCities([]);
      });
  };

  const getCities = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/employeer/cities/${browseCandidateValues.state_id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response, "CITY");
        setCities(response.data.data);
      })
      .catch((err) => {
        console.log(err, "CITY");
        setCities([]);
      });
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    dispatch(
      setBrowseCandidateValues({
        ...browseCandidateValues,
        state_id: 0,
        city_id: 0,
      })
    );
    getState();
  }, [browseCandidateValues.country_id]);

  useEffect(() => {
    dispatch(
      setBrowseCandidateValues({
        ...browseCandidateValues,
        city_id: 0,
      })
    );
    getCities();
  }, [browseCandidateValues.state_id]);

  const [experienceValue, setExperienceValue] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const [salaryValue, setSalaryValue] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/experience-level",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setExperienceValue(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/salary-range",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setSalaryValue(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setBrowseCandidateValues({ ...browseCandidateValues, [name]: value })
    );
  };

  const [educations, setEducations] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/educations",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setEducations(res.data.data || []);
        setShowSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  }, []);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://novajobs.us/api/employeer/job-seekers",
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       dispatch(setBrowseCandidateData(res.data.data || []));
  //       setHasDataFetched(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setHasDataFetched(false);
  //     });
  // }, []);

  const baseUrl = "https://novajobs.us/api/employeer/job-seekers";

  const params = new URLSearchParams();

  if (browseCandidateValues.experience) {
    params.append("experience_in_month", browseCandidateValues.experience);
  }

  if (browseCandidateValues.salary) {
    params.append("salary_range", browseCandidateValues.salary);
  }

  if (localStorage.getItem("profession_title")) {
    params.append("title_keywords", localStorage.getItem("profession_title"));
  } else if (browseCandidateValues.search_input) {
    params.append("title_keywords", browseCandidateValues.search_input);
  }

  if (localStorage.getItem("location")) {
    params.append("location", localStorage.getItem("location"));
  } else if (browseCandidateValues.state_id) {
    params.append("location", browseCandidateValues.state_id);
  }

  if (browseCandidateValues.education) {
    params.append("education", browseCandidateValues.education);
  }

  const url = `${baseUrl}?${params.toString()}`;
  console.log(url, "this is the url");

  const handleGetReq = () => {
    axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.data.data) {
          dispatch(setBrowseCandidateData(response.data.data));
          console.log(response.data.data, "filter data");
          setShowSkeleton(false);
        } else {
          dispatch(setBrowseCandidateData([]));
        }

        console.log(response, "custom data");
      })
      .catch((err) => {
        console.log(err, "custom err");
      });
  };
  useEffect(() => {
    // if (localStorage.getItem("profession_title") !== null) {
    handleGetReq();
    // }
    return () => {
      localStorage.removeItem("profession_title");
    };
  }, []);

  const getSingleCountry = (countryId) => {
    return countries.find((country) => country.id === countryId)?.name || "";
  };

  const getSingleState = (stateId) => {
    return states.find((state) => state.id === stateId)?.name || "";
  };
  const getSingleCity = (cityId) => {
    return cities.find((city) => city.id === cityId)?.name || "";
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <PageTitle motherName="Home" activeName="Browse Candidates" />
        </div>
        <div className="section-full browse-job-find">
          <div className="container">
            <div className="find-job-bx">
              <div className="dezPlaceAni p-t50 p-b20">
                <div className="d-flex justify-content-center ">
                  <div className="col-lg-3 col-md-5">
                    <div className="form-group">
                      <label htmlFor="education"></label>
                      <div className="input-group">
                        {educations ? (
                          <select
                            type="text"
                            className="form-control"
                            id="education"
                            name="education"
                            onChange={handleChange}
                            value={browseCandidateValues.education}
                            autoComplete="false"
                          >
                            <option value="">Choose Education</option>
                            {educations.map((item) => {
                              return (
                                <option key={item.id} value={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                        {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="form-group">
                      <label htmlFor="experience"></label>
                      <div className="input-group">
                        <select
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          onChange={handleChange}
                          value={browseCandidateValues.experience}
                          autoComplete="false"
                        >
                          <option value="">Choose Experience</option>
                          {experienceValue.map((item, index) => {
                            return (
                              <option
                                className="form-control"
                                key={index}
                                value={item.id}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                        {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="form-group">
                      <label htmlFor="state_id"></label>
                      <div className="input-group">
                        <select
                          type="text"
                          className="form-control"
                          id="state_id"
                          name="state_id"
                          onChange={handleChange}
                          value={browseCandidateValues.state_id}
                          autoComplete="false"
                        >
                          <option value="">Choose A State</option>
                          {states.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                        {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-dollar"></i>
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="form-group">
                      <label htmlFor="salary"></label>
                      <div className="input-group">
                        <select
                          type="text"
                          className="form-control"
                          id="salary"
                          name="salary"
                          onChange={handleChange}
                          value={browseCandidateValues.salary}
                          autoComplete="false"
                        >
                          <option value="">Choose Your Salary</option>
                          {salaryValue.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                        {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-dollar"></i>
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row d-flex justify-content-center mb-3 "
                  style={{ gap: "12px" }}
                >
                  <div
                    className=" w-75 d-flex flex-column   p-2 "
                    style={{
                      backgroundColor: "#f5f5f5",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      name="search_input"
                      id="search_input"
                      onChange={handleChange}
                      value={browseCandidateValues.search_input}
                      autoComplete="false"
                      className="w-100 p-2 h-100 bg-transparent border-0 "
                      placeholder="search here..."
                      style={{ outline: "none" }}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleGetReq();
                    }}
                    className="border-0 site-button d-flex align-items-center "
                    style={{ cursor: "pointer", outline: "none", gap: "7px" }}
                  >
                    <FaSearch />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {browseCandidateData ? (
          <div className="content-block">
            <div className="section-full bg-white browse-job p-b50">
              {showSkeleton === true ? (
                <div className="bg-white w-100 ">
                  <TwoBoxWithLinesSkeleton />
                </div>
              ) : (
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4 col-lg-5 m-b30">
                      <div className="sticky-top">
                        {browseCandidateData ? (
                          <div className="candidate-info company-info">
                            <ul
                              className="job-list-container"
                              style={{
                                maxHeight: "calc(100vh - 200px)",
                                overflowY: "auto",
                                boxShadow: "0 0 10px 0 rgba(0, 24, 128, 0.1)",
                              }}
                            >
                              {browseCandidateData.map((item, index) => (
                                <div key={index}>
                                  <li>
                                    <Link
                                      to="#"
                                      onClick={() => handleSelectJob(item)}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "100%",
                                          position: "relative",
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: "30%",
                                          }}
                                        >
                                          <img
                                            src={testImg}
                                            alt=""
                                            style={{
                                              width: "80px",
                                              height: "80px",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            width: "80%",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {item.jobskkers_detail.first_name ||
                                            (item.jobskkers_detail
                                              .last_name && (
                                              <p
                                                className="mb-0"
                                                style={{
                                                  color: "#1c2957",
                                                  fontSize: "20px",
                                                }}
                                              >
                                                {
                                                  item.jobskkers_detail
                                                    .first_name
                                                }{" "}
                                                {
                                                  item.jobskkers_detail
                                                    .last_name
                                                }
                                              </p>
                                            ))}
                                          {item.jobskkers_detail.skills_arr ? (
                                            <div
                                              className="d-flex flex-row mb-0 "
                                              style={{ gap: "7px" }}
                                            >
                                              {item.jobskkers_detail.skills_arr.map(
                                                (item, index) => (
                                                  <p
                                                    className="mb-0 "
                                                    key={index}
                                                  >
                                                    {item}
                                                  </p>
                                                )
                                              )}
                                            </div>
                                          ) : null}
                                          <div
                                            className=" gap-0 align-items-center joblist"
                                            style={{
                                              gap: "0px",
                                              height: "auto",
                                            }}
                                          >
                                            {item.jobskkers_detail.email && (
                                              <p
                                                style={{
                                                  margin: "0px",
                                                }}
                                              >
                                                {item.jobskkers_detail.email}
                                              </p>
                                            )}
                                            {item.jobskkers_detail.phone && (
                                              <p
                                                style={{
                                                  margin: "0px",
                                                }}
                                              >
                                                {item.jobskkers_detail.phone}
                                              </p>
                                            )}
                                            <div
                                              className="d-flex "
                                              style={{
                                                justifyContent: "start",
                                                gap: "10px",
                                              }}
                                            >
                                              <div>
                                                {item.jobskkers_detail
                                                  .state_id && (
                                                  <p
                                                    style={{
                                                      margin: "0px",
                                                      fontWeight: 700,
                                                    }}
                                                  >
                                                    {
                                                      item?.jobskkers_detail
                                                        ?.states?.name
                                                    }
                                                  </p>
                                                )}
                                              </div>
                                              <div>
                                                {item.jobskkers_detail
                                                  .city_id && (
                                                  <p
                                                    style={{
                                                      margin: "0px",
                                                      fontWeight: 700,
                                                    }}
                                                  >
                                                    {
                                                      item?.jobskkers_detail
                                                        ?.cities?.name
                                                    }
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                            <div>
                                              {item.jobskkers_detail
                                                .created_at && (
                                                <p
                                                  style={{
                                                    margin: "0px",
                                                    fontWeight: "600",
                                                  }}
                                                >
                                                  {moment(
                                                    item.jobskkers_detail
                                                      .created_at
                                                  ).fromNow()}
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </div>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {selectedJob && (
                      <div className="col-xl-8 col-lg-7 m-b30 job-bx ">
                        <div
                          className="d-flex flex-column "
                          style={{ gap: "12px" }}
                        >
                          <div className="candidate-title">
                            <Link
                              to={`/employee/profilepage/${selectedJob.jobskkers_detail.id}`}
                            >
                              <h3 className="mb-1">
                                {selectedJob.jobskkers_detail.first_name}{" "}
                                {selectedJob.jobskkers_detail.last_name}
                              </h3>
                            </Link>
                            <div className="job-details-content">
                              {selectedJob.jobskkers_detail.email &&
                                selectedJob.jobskkers_detail.phone && (
                                  <p className="mb-0">
                                    {selectedJob.jobskkers_detail.email} |{" "}
                                    {selectedJob.jobskkers_detail.phone}
                                  </p>
                                )}
                              {selectedJob.jobskkers_detail.skills_arr ? (
                                <div
                                  className="d-flex flex-column "
                                  style={{ gap: "7px" }}
                                >
                                  <h5 className="mb-0">Skills:</h5>
                                  <div
                                    className="row m-0 "
                                    style={{ gap: "12px" }}
                                  >
                                    {selectedJob.jobskkers_detail.skills_arr.map(
                                      (item, index) => (
                                        <p key={index} className="mb-0">
                                          {item}
                                        </p>
                                      )
                                    )}
                                  </div>
                                </div>
                              ) : null}
                            </div>

                            {selectedJob.jobskkers_detail.city_id ||
                            selectedJob.jobskkers_detail.state_id ||
                            selectedJob.jobskkers_detail.country_id ? (
                              <div
                                className="d-flex flex-column"
                                style={{ marginTop: "7px", gap: "7px" }}
                              >
                                <h5 className="mb-0 ">Location :</h5>
                                <div
                                  className="row m-0 "
                                  style={{ gap: "12px" }}
                                >
                                  <p className="mb-0 ">
                                    {getSingleCity(
                                      selectedJob.jobskkers_detail.city_id
                                    )}{" "}
                                  </p>
                                  <p className="mb-0 ">
                                    {getSingleState(
                                      selectedJob.jobskkers_detail.state_id
                                    )}{" "}
                                  </p>

                                  <p className="mb-0 ">
                                    {getSingleCountry(
                                      selectedJob.jobskkers_detail.country_id
                                    )}
                                  </p>
                                </div>
                              </div>
                            ) : null}
                            {selectedJob.jobskkers_detail
                              .profileSummaryValue && (
                              <p className="mb-1">
                                <div
                                  className="ql-editor"
                                  style={{
                                    fontSize: "13px",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      selectedJob.jobskkers_detail
                                        .profileSummaryValue,
                                  }}
                                />
                              </p>
                            )}
                          </div>

                          {selectedJob.jobskkers_detail
                            .resume_score_percentage ? (
                            <div
                              className="row m-0  align-items-center "
                              style={{ gap: "7px" }}
                            >
                              <h5 className="mb-0 ">Resume Score:</h5>
                              <p className="mb-0">
                                {
                                  selectedJob.jobskkers_detail
                                    .resume_score_percentage
                                }
                              </p>
                            </div>
                          ) : null}

                          {selectedJob.jobskkers_detail.ai_resume_parse_data
                            .jobsMyResumeData.profileSummaryValue ? (
                            <div
                              className="d-flex flex-column  "
                              style={{ gap: "7px" }}
                            >
                              <h5 className="mb-0">Profile Summary</h5>
                              <p className="mb-0 ">
                                {
                                  selectedJob.jobskkers_detail
                                    .ai_resume_parse_data.jobsMyResumeData
                                    .profileSummaryValue
                                }
                              </p>
                            </div>
                          ) : null}

                          {selectedJob.jobskkers_detail.ai_resume_parse_data
                            .jobsMyResumeData.educationData ? (
                            <div
                              className="d-flex flex-column "
                              style={{ gap: "12px" }}
                            >
                              <h5 className="mb-0 ">Education</h5>
                              <div
                                className="d-flex flex-column "
                                style={{ gap: "7px" }}
                              >
                                {selectedJob.jobskkers_detail.ai_resume_parse_data.jobsMyResumeData.educationData.map(
                                  (item, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="d-flex flex-column "
                                        style={{ gap: "4px" }}
                                      >
                                        <h6 className="mb-0">
                                          {item.education}
                                        </h6>
                                        <p className="mb-0">
                                          {item.course}, {item.university}
                                        </p>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          ) : null}

                          {selectedJob.jobskkers_detail.ai_resume_parse_data
                            .jobsMyResumeData.employmentData ? (
                            <div
                              className="d-flex flex-column "
                              style={{ gap: "12px" }}
                            >
                              <h5 className="mb-0 ">Education</h5>
                              <div
                                className="d-flex flex-column "
                                style={{ gap: "7px" }}
                              >
                                {selectedJob.jobskkers_detail.ai_resume_parse_data.jobsMyResumeData.employmentData.map(
                                  (item, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="d-flex flex-column "
                                        style={{ gap: "4px" }}
                                      >
                                        <h6 className="mb-0">
                                          {item.jobTitle}, {item.company}
                                        </h6>
                                        <p className="mb-0">
                                          {item.jobStartDate}, {item.jobEndDate}
                                        </p>
                                        <p className="mb-0">
                                          {item.jobDescription}
                                        </p>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          ) : null}
                          {selectedJob.jobskkers_detail.created_at && (
                            <p className="mb-0 ">
                              Posted{" "}
                              {moment(
                                selectedJob.jobskkers_detail.created_at
                              ).fromNow()}
                            </p>
                          )}
                          {/* <div className="d-flex justify-content-start align-items-center">
                          {selectedJob.job_detail.is_job_applied ? (
                            <button
                              className="radius-xl site-button"
                              // onClick={handleShow}
                            >
                              View Status
                            </button>
                          ) : (
                            <button
                              className="radius-xl site-button"
                              onClick={handleShow}
                            >
                              Apply
                            </button>
                          )}
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header
                              closeButton
                              style={{ backgroundColor: "#ffff" }}
                              className="mt-4"
                            >
                              <Modal.Title style={{ color: "#000" }}>
                                <p> Apply to {selectedJob.company}</p>
                              </Modal.Title>
                            </Modal.Header>

                            <Modal.Footer>
                              {activeTab !== "contact-info" && (
                                <button
                                  className="site-button mr-2"
                                  onClick={handlePrev}
                                >
                                  Previous
                                </button>
                              )}
                              {activeTab === "contact-info" && (
                                <button
                                  className="site-button"
                                  onClick={() => {
                                    handleClose();
                                    submitApplication();
                                  }}
                                  // onClick={handleClose}
                                >
                                  Submit
                                </button>
                              )}
                            </Modal.Footer>
                          </Modal>

                          <label className="like-btn">
                            <input
                              type="checkbox"
                              defaultChecked={
                                selectedJob.job_detail.is_job_favorite
                              }
                              name={selectedJob.job_detail.id}
                              onClick={() => {
                                toggleFabJobs();
                              }}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-100 d-flex align-items-center justify-content-center ">
            <img
              src={SkeletonImg}
              alt="no data there"
              style={{ width: "40%" }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default EmployeeBrowsecandidates;
