import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import {
  setJobApplicationData,
  setJobApplicationValues,
} from "../../store/reducers/jobApplicationSlice";
import moment from "moment";
import testImg from "../../images/jobpageicon.png";
import "react-quill/dist/quill.snow.css";
import {
  setJobSeekerAnswer,
  setScreeningQuestion,
  setUserAnswer,
} from "../../store/reducers/jobApplicationScreeningQues";
import { submit } from "redux-form";
import JobPageSkeleton from "../skeleton/jobPage";
import TwoBoxWithLinesSkeleton from "../skeleton/twoBoxLines";
import { useParams } from "react-router-dom";
import SkeletonImg from "../../images/jobpage/No data-pana.png";

function JobPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("contact-info"); // Initial active tab

  const dispatch = useDispatch();
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const token = localStorage.getItem("jobSeekerLoginToken");
  const screeningQuestion = useSelector(
    (state) => state.jobApplicationScreeningQues.selectedScreeningQuestions
  );

  const [showSkeleton, setShowSkeleton] = useState(true);
  const navigate = useNavigate();
  const toggleFabJobs = async () => {
    try {
      await axios({
        url: "https://novajobs.us/api/jobseeker/job-favorites",
        method: "POST",
        headers: { Authorization: token },
        data: {
          job_id: selectedJob.job_detail.id,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobApplicationData = async () => {
    try {
      const response = await axios.get(
        "https://novajobs.us/api/jobseeker/job-lists",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(setJobApplicationData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedJob && selectedJob.screen_questions) {
      dispatch(setScreeningQuestion(selectedJob.screen_questions));
    }
  }, [selectedJob]);
  const convertToPlainText = (htmlContent) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    let plainText = div.innerText || div.textContent || "";
    // Reduce length to 50 words
    plainText = plainText.split(/\s+/).slice(0, 30).join(" ");
    return plainText;
  };

  useEffect(() => {
    setSelectedJob(jobApplicationData[0]);
    console.log(jobApplicationData, "error");
  }, [jobApplicationData]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = () => {
    // Update activeTab state based on the current active tab
    if (activeTab === "contact-info") {
      setActiveTab("additional-info");
    } else if (activeTab === "additional-info") {
      setActiveTab("resume-info");
    } else if (activeTab === "resume-info") {
      setActiveTab("immediate-info");
    }
  };

  const handlePrev = () => {
    // Update activeTab state based on the current active tab
    if (activeTab === "immediate-info") {
      setActiveTab("resume-info");
    } else if (activeTab === "resume-info") {
      setActiveTab("additional-info");
    } else if (activeTab === "additional-info") {
      setActiveTab("contact-info");
    }
  };

  useEffect(() => {
    const fetchJobApplicationData = async () => {
      try {
        const response = await axios.get(
          "https://novajobs.us/api/jobseeker/job-lists",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        dispatch(setJobApplicationData(response.data.data));
        setShowSkeleton(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobApplicationData();
  }, [dispatch, token]);

  const jobApplicationValues = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationValues
  );

  // console.table(jobApplicationValues, "values");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country_id") {
      const selectedIndex = e.target.selectedIndex;
      const text = e.target.options[selectedIndex].text;
      // console.log(text);
      dispatch(
        setJobApplicationValues({
          ...jobApplicationValues,
          country: text,
          [name]: value,
        })
      );
      return;
    }

    if (name === "city_id") {
      const selectedIndex = e.target.selectedIndex;
      const text = e.target.options[selectedIndex].text;
      // console.log(text);
      dispatch(
        setJobApplicationValues({
          ...jobApplicationValues,
          city: text,
          [name]: value,
        })
      );
      return;
    }

    if (name === "state_id") {
      const selectedIndex = e.target.selectedIndex;
      const text = e.target.options[selectedIndex].text;
      // console.log(text);
      dispatch(
        setJobApplicationValues({
          ...jobApplicationValues,
          state: text,
          [name]: value,
        })
      );
      return;
    }
    dispatch(
      setJobApplicationValues({ ...jobApplicationValues, [name]: value })
    );
  };
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

  const [workplace_type, setWorkplace_type] = useState([
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

  const [job_type, setJobType] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const [jobCategories, setJobCategories] = useState([
    {
      id: 0,
      name: "",
    },
  ]);
  const [activeDropDown, setActiveDropDown] = useState("");

  useEffect(() => {
    if (jobApplicationValues.jobCategory !== "") {
      setActiveDropDown("active_dropDown");
    }
  }, [jobApplicationValues.jobCategory]);
  const getJobTyes = async () => {
    await axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/job-types",

      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        // console.log(res.data.data, "JOBTYPE");
        setJobType(res.data.data);
      })
      .catch((err) => {
        console.log(err, "joy");
      });
  };

  const getWorkplaceType = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/workplace-types",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data.data);
        setWorkplace_type(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };

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
        setCities([]);
      });
  };

  const getState = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/jobseeker/stats/231`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data.data, "STATE");
        setStates(response.data.data);
      })
      .catch((err) => {
        console.log(err, "STATE");
        setStates([]);
        setCities([]);
      });
  };

  const getCities = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/jobseeker/cities/${jobApplicationValues.state_id}`,
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

  const getExperience = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/experience-level",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        // console.log(response.data.data);
        setExperience(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    getCountry();
    getExperience();
    getWorkplaceType();
    getJobTyes();
  }, []);

  useEffect(() => {
    dispatch(
      setJobApplicationValues({
        ...jobApplicationValues,
        state_id: 0,
        city_id: 0,
      })
    );
    getState();
  }, [jobApplicationValues.country_id]);

  useEffect(() => {
    dispatch(
      setJobApplicationValues({
        ...jobApplicationValues,
        city_id: 0,
      })
    );
    getCities();
  }, [jobApplicationValues.state_id]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/job-categories",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, "jobCategory");
        setJobCategories(response.data.data);
      })
      .catch((err) => console.log(err, "jobCategory"));
  }, []);

  const submitApplication = async () => {
    await axios({
      url: "https://novajobs.us/api/jobseeker/jobs-applied",
      method: "POST",
      headers: {
        Authorization: token,
      },
      data: {
        job_id: selectedJob.job_detail.id,
        screen_questions: screeningQuestion,
      },
    })
      .then((res) => {
        // console.log(res);
        fetchJobApplicationData();
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };

  const selectedLocation = localStorage.getItem("selectedLocation");
  const title_keyword = localStorage.getItem("title_keyword");
  const baseUrl =
    // "https://novajobs.us/api/jobseeker/job-lists/?page_size=7&is_publish=1";
    "https://novajobs.us/api/jobseeker/job-lists?page_size=7&is_publish=1";

  const params = new URLSearchParams();

  if (jobApplicationValues.search_input) {
    params.append("title_keywords", jobApplicationValues.search_input);
  } else if (title_keyword) {
    params.append("title_keywords", title_keyword);
  }

  if (jobApplicationValues.state_id) {
    params.append("location", jobApplicationValues.state_id);
  } else if (selectedLocation) {
    params.append("location", selectedLocation);
  }

  if (jobApplicationValues.workplace_type) {
    params.append("workplace_type", jobApplicationValues.workplace_type);
  }

  if (jobApplicationValues.job_type) {
    params.append("job_type", jobApplicationValues.job_type);
  }
  if (jobApplicationValues.experience_level) {
    params.append("experience_level", jobApplicationValues.experience_level);
  }
  if (jobApplicationValues.jobCategory) {
    params.append("job_category_id", jobApplicationValues.jobCategory);
  } else if (localStorage.getItem("jobCategory")) {
    params.append("job_category_id", localStorage.getItem("jobCategory"));
  }

  // const url = `${baseUrl}?${params.toString()}`;
  const url = `${baseUrl}&${params.toString()}`;
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
          dispatch(setJobApplicationData(response.data.data));
        } else {
          dispatch(setJobApplicationData([]));
        }

        console.log(response, "custom data");
      })
      .catch((err) => {
        console.log(err, "custom err");
      });
  };
  useEffect(() => {
    if (
      selectedLocation ||
      title_keyword ||
      localStorage.getItem("jobCategory") !== null
    ) {
      handleGetReq();
    }
    return () => {
      localStorage.removeItem("selectedLocation");
      localStorage.removeItem("title_keyword");
      localStorage.removeItem("jobCategory");
    };
  }, []);

  return (
    <>
      <Header />
      {localStorage.getItem("jobSeekerLoginToken") ? <FixedHeader /> : null}

      <div>
        {showSkeleton === true ? (
          <div className="bg-white w-100 ">
            <TwoBoxWithLinesSkeleton />
          </div>
        ) : (
          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white p-t50 p-b20">
                <div className="container">
                  <div className="d-flex justify-content-center align-items-center  ">
                    <div className="col-lg-2  col-md-5 col-12  ">
                      <div className="form-group">
                        {/* <label htmlFor="country_id">Country:</label>
                      {countries ? (
                        <select
                          type="text"
                          className="form-control"
                          id="country_id"
                          name="country_id"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          value={jobApplicationValues.country_id}
                        >
                          <option value="">Select a country</option>
                          {countries.map((item, index) => {
                            return (
                              <option
                                key={index}
                                value={item.id}
                                country={item.name}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      ) : null} */}
                        <label htmlFor="jobCategory">Choose Category</label>
                        {jobCategories ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.jobCategory === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            id="jobCategory"
                            name="jobCategory"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={jobApplicationValues.jobCategory}
                          >
                            <option value="">Select a Category</option>
                            {jobCategories.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item.id}
                                  country={item.name}
                                >
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="state_id">State:</label>
                        {states ? (
                          <select
                            type="text"
                            c
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.state_id === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            id="state_id"
                            name="state_id"
                            onChange={handleChange}
                            value={jobApplicationValues.state_id}
                          >
                            <option value="">Select a State</option>
                            {states.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-2  col-md-5 col-12  ">
                      <div className="form-group">
                        <label htmlFor="city_id">City:</label>
                        {cities ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.city_id === 0
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="city_id"
                            name="city_id"
                            onChange={handleChange}
                            value={jobApplicationValues.city_id}
                          >
                            <option value="" className="option">
                              Select A City
                            </option>

                            {cities.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="workplace_type">WorkPlace Type:</label>
                        {workplace_type ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.workplace_type === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="workplace_type"
                            name="workplace_type"
                            onChange={handleChange}
                            value={jobApplicationValues.workplace_type}
                          >
                            <option value="">Select WorkPlace</option>
                            {workplace_type.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-5 col-12 ">
                      <div className="form-group">
                        <label htmlFor="job_type">Job Type:</label>
                        {job_type ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.job_type === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="job_type"
                            name="job_type"
                            onChange={handleChange}
                            value={jobApplicationValues.job_type}
                          >
                            <option value="">Select Job Type</option>
                            {job_type.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-5 col-12  ">
                      <div className="form-group">
                        <label htmlFor="experience_level">
                          Experience Level:
                        </label>
                        {experience ? (
                          <select
                            type="text"
                            className={`form-control dropdown-menu-job_page ${
                              jobApplicationValues.experience_level === ""
                                ? null
                                : "active_dropDown"
                            }`}
                            // placeholder="London"
                            id="experience_level"
                            name="experience_level"
                            onChange={handleChange}
                            value={jobApplicationValues.experience_level}
                          >
                            <option value="">Select Experience</option>
                            {experience.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div
                    className="row d-flex justify-content-center "
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
                        value={jobApplicationValues.search_input}
                        autoComplete="false"
                        className="w-100 p-2 h-100 bg-transparent border-0 "
                        placeholder="search here..."
                        style={{ outline: "none" }}
                      />
                    </div>
                    <button
                      onClick={handleGetReq}
                      className="border-0 site-button d-flex align-items-center "
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        gap: "7px",
                      }}
                    >
                      <FaSearch />
                      Search
                    </button>
                  </div>
                </div>
                {jobApplicationData.length !== 0 ? (
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-4 col-lg-5 m-b30">
                        <div className="sticky-top">
                          {jobApplicationData ? (
                            <div className="candidate-info company-info">
                              <ul
                                className="job-list-container"
                                style={{
                                  maxHeight: "calc(100vh - 200px)",
                                  overflowY: "auto",
                                  boxShadow: "0 0 10px 0 rgba(0, 24, 128, 0.1)",
                                }}
                              >
                                {jobApplicationData.map((job) => (
                                  <div>
                                    <li key={job.s_no}>
                                      <Link
                                        to="#"
                                        onClick={() => handleSelectJob(job)}
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
                                            {job.job_detail.job_title && (
                                              <p
                                                className="mb-0"
                                                style={{
                                                  color: "#1c2957",
                                                  fontSize: "20px",
                                                }}
                                              >
                                                {job.job_detail.job_title}
                                              </p>
                                            )}
                                            <div
                                              className="d-flex flex-row mb-0 "
                                              style={{
                                                gap: "7px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              {job.companies.company_name}
                                              <p
                                                className="mb-0"
                                                onClick={() => {
                                                  navigate(
                                                    `/user/company/${job.companies.id}`
                                                  );
                                                }}
                                              ></p>
                                            </div>

                                            <span
                                              style={{
                                                marginBottom: "0px",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                              }}
                                            >
                                              Skills required:
                                            </span>
                                            <span
                                              className="d-flex flex-row mb-0 "
                                              style={{ gap: "7px" }}
                                            >
                                              {job.job_detail.skills_arr.map(
                                                (item, index) => (
                                                  <span
                                                    style={{
                                                      fontSize: "12px",
                                                    }}
                                                    className="mb-0 "
                                                    key={index}
                                                  >
                                                    {item}
                                                  </span>
                                                )
                                              )}
                                            </span>

                                            <div
                                              className=" gap-0 align-items-center joblist"
                                              style={{
                                                gap: "0px",
                                                fontSize: "13px",

                                                height: "auto",
                                              }}
                                            >
                                              {/* {job.job_category && (
                                            <p
                                              style={{
                                                margin: "0px",
                                              }}>
                                              {job.job_category.name}
                                            </p>
                                          )}
                                          {job.job_type && (
                                            <p
                                              style={{
                                                margin: "0px",
                                              }}>
                                              {job.job_type.name}
                                            </p>
                                          )} */}
                                              <div
                                                className="d-flex "
                                                style={{
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <div>
                                                  {job.job_workplace_types
                                                    .name && (
                                                    <p
                                                      style={{
                                                        margin: "0px",
                                                      }}
                                                    >
                                                      {
                                                        job.job_workplace_types
                                                          .name
                                                      }
                                                    </p>
                                                  )}
                                                </div>
                                                <div>
                                                  {job.job_detail
                                                    .created_at && (
                                                    <p
                                                      style={{
                                                        margin: "0px",
                                                        fontWeight: "600",
                                                      }}
                                                    >
                                                      {moment(
                                                        job.job_detail
                                                          .created_at
                                                      ).fromNow()}
                                                    </p>
                                                  )}
                                                </div>
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
                      <div className="col-xl-8 col-lg-7 m-b30">
                        {selectedJob && (
                          <div className="m-b20 job-bx ">
                            <div>
                              <div className="candidate-title">
                                <Link to="#">
                                  <h3 className="mb-1">
                                    {selectedJob.job_detail.job_title}
                                  </h3>
                                </Link>
                                <div className="job-details-content">
                                  {selectedJob.job_workplace_types.name &&
                                    selectedJob.job_type.name &&
                                    selectedJob.job_category.name && (
                                      <p className="mb-0">
                                        {selectedJob.job_workplace_types.name} |{" "}
                                        {selectedJob.job_type.name} |{" "}
                                        {selectedJob.job_category.name}
                                      </p>
                                    )}
                                  <div
                                    className="d-flex"
                                    style={{ gap: "7px" }}
                                  >
                                    {selectedJob.job_detail.skills_arr.map(
                                      (item, index) => (
                                        <p key={index} className="mb-5">
                                          {item}
                                        </p>
                                      )
                                    )}
                                  </div>
                                  {selectedJob.job_detail.skills && (
                                    <p>
                                      Skills: {selectedJob.job_detail.skills}
                                    </p>
                                  )}
                                  {selectedJob.companies.id && (
                                    <div
                                      className="d-flex"
                                      style={{
                                        gap: "100px",
                                      }}
                                    >
                                      <p
                                        style={{
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          navigate(
                                            `/user/company/${selectedJob.companies.id}`
                                          );
                                        }}
                                      >
                                        <i
                                          class="fa fa-briefcase"
                                          aria-hidden="true"
                                        ></i>
                                        {"  "}
                                        {selectedJob.companies.company_name}
                                      </p>
                                      <p>
                                        <i
                                          class="fa fa-registered"
                                          aria-hidden="true"
                                        ></i>

                                        {"  "}
                                        {selectedJob.companies.founded_date}
                                      </p>
                                    </div>
                                  )}
                                  {selectedJob.companies.id && (
                                    <div
                                      className="d-flex"
                                      style={{
                                        gap: "100px",
                                      }}
                                    >
                                      <p>
                                        <i
                                          class="fa fa-users"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        {
                                          selectedJob.companies.company_size
                                            .range
                                        }
                                      </p>
                                      <p>
                                        <i
                                          class="fa fa-location-arrow"
                                          aria-hidden="true"
                                        ></i>
                                        {"  "}
                                        {
                                          selectedJob.companies.cities.name
                                        }, {selectedJob.companies.states.name}
                                      </p>
                                    </div>
                                  )}{" "}
                                </div>
                                {selectedJob.job_detail.job_description && (
                                  <p className="mb-1">
                                    <div
                                      className="ql-editor"
                                      style={{
                                        fontSize: "13px",
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          selectedJob.job_detail
                                            .job_description,
                                      }}
                                    />
                                  </p>
                                )}
                              </div>
                              {selectedJob.job_detail.created_at && (
                                <p>
                                  Posted{" "}
                                  {moment(
                                    selectedJob.job_detail.created_at
                                  ).fromNow()}
                                </p>
                              )}
                              <div className="d-flex justify-content-start align-items-center">
                                {localStorage.getItem("jobSeekerLoginToken") ? (
                                  <>
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
                                  </>
                                ) : (
                                  <>
                                    <button
                                      className="radius-xl site-button"
                                      onClick={() => navigate("/user/login")}
                                    >
                                      Apply
                                    </button>
                                  </>
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
                                  <Modal.Body>
                                    <Tab.Container
                                      id="tabs-example"
                                      activeKey={activeTab}
                                    >
                                      <div
                                        style={{
                                          fontSize: "20px",
                                          paddingBottom: "10px",
                                        }}
                                      >
                                        Screening questions
                                      </div>
                                      <Tab.Content>
                                        <Tab.Pane eventKey="contact-info">
                                          <form className="col-12 p-a0">
                                            {selectedJob.screen_questions
                                              .screen_question_keywords !==
                                            null ? (
                                              <div>
                                                {selectedJob.screen_questions.screen_question_keywords.map(
                                                  (item, index) => (
                                                    <div key={index}>
                                                      <h4>{item.name}</h4>
                                                      <div>
                                                        {item.screen_questions.map(
                                                          (
                                                            ques,
                                                            questionIndex
                                                          ) => (
                                                            <div
                                                              key={
                                                                questionIndex
                                                              }
                                                              style={{
                                                                paddingBottom:
                                                                  "30px",
                                                              }}
                                                            >
                                                              <h5>
                                                                {ques.name}
                                                              </h5>
                                                              {ques.screen_questions_options.map(
                                                                (option) => (
                                                                  <Form.Check
                                                                    type="radio"
                                                                    label={
                                                                      option.option
                                                                    }
                                                                    id={
                                                                      option.option
                                                                    }
                                                                    className="site-button"
                                                                    name={
                                                                      ques.name
                                                                    }
                                                                    style={{
                                                                      marginRight:
                                                                        "30px",
                                                                      padding:
                                                                        "10px 30px",
                                                                    }}
                                                                    onClick={() => {
                                                                      dispatch(
                                                                        setJobSeekerAnswer(
                                                                          {
                                                                            index:
                                                                              index,
                                                                            questionIndex:
                                                                              questionIndex,
                                                                            answer:
                                                                              option.option,
                                                                          }
                                                                        )
                                                                      );
                                                                    }}
                                                                  />
                                                                )
                                                              )}
                                                            </div>
                                                          )
                                                        )}
                                                      </div>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            ) : null}
                                          </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="additional-info">
                                          {/* Additional Info Form */}
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              Additional info
                                            </h6>
                                            <div class="form-group">
                                              <label for="englishProficiency">
                                                What is your level of
                                                proficiency in English?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="englishProficiency"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                                <option>Fluent</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <label for="salaryRange">
                                                Are you okay with the salary
                                                range between 30k - 35K?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="salaryRange"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                            <div class="form-group">
                                              <label for="customerServiceExperience">
                                                How many years of Customer
                                                Service experience do you
                                                currently have?
                                              </label>
                                              <input
                                                type="number"
                                                class="form-control"
                                                id="customerServiceExperience"
                                                placeholder="Enter years of experience"
                                                min="0"
                                                max="99"
                                                required
                                              />
                                            </div>
                                            <div class="form-group">
                                              <label for="workLocation">
                                                Are you comfortable to work on
                                                both Gurgaon and Delhi branches?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="workLocation"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                          </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="resume-info">
                                          {/* Additional Info Form */}
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              Resume info
                                            </h6>
                                            <div class="form-group">
                                              <label for="resume">
                                                Upload resume (DOC, DOCX, PDF,
                                                up to 2 MB)
                                              </label>
                                              <input
                                                type="file"
                                                class="form-control-file"
                                                id="resume"
                                                name="resume"
                                                accept=".doc, .docx, .pdf"
                                                required
                                              />
                                              <small class="form-text text-muted">
                                                Accepted file types: DOC, DOCX,
                                                PDF. Maximum file size: 2 MB.
                                              </small>
                                            </div>
                                          </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="immediate-info">
                                          <form className="col-12 p-a0">
                                            <h6 className="font-weight-600">
                                              immediate info
                                            </h6>

                                            <div class="form-group">
                                              <label for="immediateStart">
                                                We must fill this position
                                                urgently. Can you start
                                                immediately?
                                              </label>
                                              <select
                                                class="form-control"
                                                id="immediateStart"
                                                required
                                              >
                                                <option value="">
                                                  Select an option
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                              </select>
                                            </div>
                                          </form>
                                        </Tab.Pane>
                                      </Tab.Content>
                                    </Tab.Container>
                                  </Modal.Body>
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

                                <label className="like-btn" labl>
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
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedJob ? (
                          <div className="job-bx ">
                            <h3>About Company</h3>
                            {selectedJob.companies.about}
                          </div>
                        ) : null}
                      </div>
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
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default JobPage;
