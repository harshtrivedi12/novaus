import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { FaSave, FaTimes } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Tab, Nav, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FixedHeader from "../../employeeMarkup/Layout/fixedHeader";
import {
  setJobApplicationData,
  setJobApplicationValues,
} from "../../store/reducers/jobApplicationSlice";
import moment from "moment";
import testImg from "../../images/team/pic1.jpg";
import "react-quill/dist/quill.snow.css";
import {
  setJobSeekerAnswer,
  setScreeningQuestion,
  setUserAnswer,
} from "../../store/reducers/jobApplicationScreeningQues";
import { submit } from "redux-form";
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

  const toggleFabJobs = async () => {
    try {
      await axios({
        url: "http://93.188.167.106:3001/api/jobseeker/job-favorites",
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
        "https://jobsbooklet.in/api/jobseeker/job-lists",
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
          "https://jobsbooklet.in/api/jobseeker/job-lists",
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
    fetchJobApplicationData();
  }, [dispatch, token]);

  const jobApplicationValues = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationValues
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const getWorkplaceType = () => {
    axios({
      method: "GET",
      url: "http://93.188.167.106:3001/api/jobseeker/workplace-types",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setWorkplace_type(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCountry = () => {
    axios({
      method: "GET",
      url: "http://93.188.167.106:3001/api/jobseeker/countries",
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
      url: `http://93.188.167.106:3001/api/jobseeker/stats/${jobApplicationValues.country_id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, "STATE");
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
      url: `http://93.188.167.106:3001/api/jobseeker/cities/${jobApplicationValues.state_id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response, "CITY");
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
      url: "http://93.188.167.106:3001/api/jobseeker/experience-level",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setExperience(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getExperience();
    getWorkplaceType();
    getCountry();
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

  const submitApplication = async () => {
    await axios({
      url: "http://93.188.167.106:3001/api/jobseeker/jobs-applied",
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
        console.log(res);
        fetchJobApplicationData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row justify-content-center align-items-center  ">
                <div className="col-lg-2  col-md-5 col-12  ">
                  <div className="form-group">
                    <label htmlFor="country_id">Country:</label>
                    <select
                      type="text"
                      className="form-control"
                      id="country_id"
                      name="country_id"
                      onChange={handleChange}
                      value={jobApplicationValues.country_id}
                    >
                      <option value="">Select a country</option>
                      {countries.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-lg-2  col-md-5 col-12 ">
                  <div className="form-group">
                    <label htmlFor="state_id">State:</label>
                    <select
                      type="text"
                      className="form-control"
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
                  </div>
                </div>

                <div className="col-lg-2  col-md-5 col-12  ">
                  <div className="form-group">
                    <label htmlFor="city_id">City:</label>
                    {cities ? (
                      <select
                        type="text"
                        className="form-control"
                        // placeholder="London"
                        id="city_id"
                        name="city_id"
                        onChange={handleChange}
                        value={jobApplicationValues.city_id}
                      >
                        <option value="">Select A City</option>

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
                    {cities ? (
                      <select
                        type="text"
                        className="form-control"
                        // placeholder="London"
                        id="workplace_type"
                        name="workplace_type"
                        onChange={handleChange}
                        value={jobApplicationValues.workplace_type}
                      >
                        <option value="">Select WorkPlace Type</option>
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

                <div className="col-lg-2  col-md-5 col-12  ">
                  <div className="form-group">
                    <label htmlFor="experience_level">Experience Level:</label>
                    {experience ? (
                      <select
                        type="text"
                        className="form-control"
                        // placeholder="London"
                        id="experience_level"
                        name="experience_level"
                        onChange={handleChange}
                        value={jobApplicationValues.experience_level}
                      >
                        <option value="">Select Experience Level</option>
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

                <button
                  className="px-3 py-2 site-button d-flex align-items-center "
                  style={{ gap: "7px" }}
                >
                  <FaSave />
                  Save
                </button>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="candidate-title">
                          <h4 className="m-b5">
                            <Link to="#">Job List</Link>
                          </h4>
                        </div>
                      </div>
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
                              <Link to="#" onClick={() => handleSelectJob(job)}>
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
                                      style={{ gap: "7px" }}
                                    >
                                      {job.job_detail.skills_arr.map(
                                        (item, index) => (
                                          <p className="mb-0 " key={index}>
                                            {item}
                                          </p>
                                        )
                                      )}
                                    </div>
                                    <div
                                      className="d-flex flex-row gap-0 align-items-center joblist"
                                      style={{
                                        gap: "0px",
                                        height: "auto",
                                      }}
                                    >
                                      {job.job_category && (
                                        <p
                                          style={{
                                            paddingBottom: "0px",
                                          }}
                                        >
                                          {job.job_category.name}
                                        </p>
                                      )}
                                      {job.job_type && (
                                        <p>{job.job_type.name}</p>
                                      )}
                                      {job.job_workplace_types.name && (
                                        <p>{job.job_workplace_types.name}</p>
                                      )}
                                    </div>
                                    {job.job_detail.created_at && (
                                      <p
                                        style={{
                                          margin: "0px",
                                        }}
                                      >
                                        Posted{" "}
                                        {moment(
                                          job.job_detail.created_at
                                        ).format("YYYY-MM-DD")}
                                        ago
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 m-b30 job-bx ">
                  {selectedJob && (
                    <div>
                      <div className="candidate-title">
                        <Link to="#">
                          <h3 className="mb-1">
                            {selectedJob.job_detail.job_title}
                          </h3>
                        </Link>
                        {selectedJob.job_detail.job_description && (
                          <p className="mb-1">
                            <div
                              className="ql-editor"
                              style={{
                                fontSize: "13px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: selectedJob.job_detail.job_description,
                              }}
                            />
                          </p>
                        )}
                      </div>
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
                        <div className="d-flex" style={{ gap: "7px" }}>
                          {selectedJob.job_detail.skills_arr.map(
                            (item, index) => (
                              <p key={index} className="mb-5">
                                {item}
                              </p>
                            )
                          )}
                        </div>
                        {selectedJob.job_detail.skills && (
                          <p>Skills: {selectedJob.job_detail.skills}</p>
                        )}
                        {selectedJob.job_detail.created_at && (
                          <p>
                            Posted{" "}
                            {moment(selectedJob.job_detail.created_at).format(
                              "YYYY-MM-DD"
                            )}{" "}
                            ago
                          </p>
                        )}
                      </div>
                      <div className="d-flex justify-content-start align-items-center">
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
                          <Modal.Body>
                            <Tab.Container
                              id="tabs-example"
                              activeKey={activeTab}
                            >
                              {/* Tab Content */}

                              <Tab.Content>
                                <Tab.Pane eventKey="contact-info">
                                  <form className="col-12 p-a0">
                                    {selectedJob.screen_questions.screen_question_keywords.map(
                                      (item, index) => (
                                        <div>
                                          <h2>{item.name}</h2>
                                          <div>
                                            {item.screen_questions.map(
                                              (ques, questionIndex) => (
                                                <div>
                                                  <h4>{ques.name}</h4>
                                                  {ques.screen_questions_options.map(
                                                    (option) => (
                                                      <Form.Check
                                                        type="radio"
                                                        label={option.option}
                                                        className="p-10"
                                                        name={ques.name}
                                                        onClick={() => {
                                                          dispatch(
                                                            setJobSeekerAnswer({
                                                              index: index,
                                                              questionIndex:
                                                                questionIndex,
                                                              answer:
                                                                option.option,
                                                            })
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
                                        What is your level of proficiency in
                                        English?
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
                                        Are you okay with the salary range
                                        between 30k - 35K?
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
                                        How many years of Customer Service
                                        experience do you currently have?
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
                                        Are you comfortable to work on both
                                        Gurgaon and Delhi branches?
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
                                        Upload resume (DOC, DOCX, PDF, up to 2
                                        MB)
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
                                        Accepted file types: DOC, DOCX, PDF.
                                        Maximum file size: 2 MB.
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
                                        We must fill this position urgently. Can
                                        you start immediately?
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

                        <label
                          className="like-btn"
                          labl
                          onClick={toggleFabJobs}
                        >
                          <input
                            type="checkbox"
                            name={selectedJob.job_detail.id}
                            checked={selectedJob.job_detail.is_job_favorite}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobPage;
