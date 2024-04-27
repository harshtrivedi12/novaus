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
import FixedHeader from "../Layout/fixedHeader";
import {
  setJobApplicationData,
  setJobApplicationValues,
} from "../../store/reducers/jobApplicationSlice";
import moment from "moment";
import testImg from "../../images/team/pic1.jpg";
import "react-quill/dist/quill.snow.css";

import { submit } from "redux-form";
import JobPageSkeleton from "../../markup/skeleton/jobPage";
import TwoBoxWithLinesSkeleton from "../../markup/skeleton/twoBoxLines";
import { useParams } from "react-router-dom";
import {
  setBrowseCandidateData,
  setBrowseCandidateValues,
} from "../../store/reducers/browseCandidateSlice";
import Jobfindbox from "../Element/Jobfindbox";
import PageTitle from "../Layout/PageTitle";
import SkeletonImg from "../../images/jobpage/No data-pana.png";
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
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("contact-info"); // Initial active tab
  const dispatch = useDispatch();
  const jobApplicationData = useSelector(
    (state) => state.jobApplicationSlice.jobApplicationData
  );
  const token = localStorage.getItem("employeeLoginToken");

  const [showSkeleton, setShowSkeleton] = useState(true);
  const browseCandidateValues = useSelector(
    (state) => state.browseCandidateSlice.browseCandidateValues
  );
  const browseCandidateData = useSelector(
    (state) => state.browseCandidateSlice.browseCandidateData
  );
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jobsbooklet.in/api/employeer/job-seekers",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        dispatch(setBrowseCandidateData(res.data.data || []));
        setShowSkeleton(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(browseCandidateData, "CANDIDATE");
  console.log(selectedJob, "selectedJob");

  useEffect(() => {
    setSelectedJob(browseCandidateData[0]);
  }, [browseCandidateData]);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  // console.table(jobApplicationValues, "values");
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "country_id") {
  //     const selectedIndex = e.target.selectedIndex;
  //     const text = e.target.options[selectedIndex].text;
  //     // console.log(text);
  //     dispatch(
  //       setJobApplicationValues({
  //         ...jobApplicationValues,
  //         country: text,
  //         [name]: value,
  //       })
  //     );
  //     return;
  //   }

  //   if (name === "city_id") {
  //     const selectedIndex = e.target.selectedIndex;
  //     const text = e.target.options[selectedIndex].text;
  //     // console.log(text);
  //     dispatch(
  //       setJobApplicationValues({
  //         ...jobApplicationValues,
  //         city: text,
  //         [name]: value,
  //       })
  //     );
  //     return;
  //   }

  //   if (name === "state_id") {
  //     const selectedIndex = e.target.selectedIndex;
  //     const text = e.target.options[selectedIndex].text;
  //     // console.log(text);
  //     dispatch(
  //       setJobApplicationValues({
  //         ...jobApplicationValues,
  //         state: text,
  //         [name]: value,
  //       })
  //     );
  //     return;
  //   }
  //   dispatch(
  //     setJobApplicationValues({ ...jobApplicationValues, [name]: value })
  //   );
  // };
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

  const getCountry = () => {
    axios({
      method: "GET",
      url: "https://jobsbooklet.in/api/employeer/countries",
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
      url: `https://jobsbooklet.in/api/employeer/stats/231`,
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
      url: `https://jobsbooklet.in/api/employeer/cities/${browseCandidateValues.state_id}`,
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
        <Jobfindbox />
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
                                                justifyContent: "space-between",
                                              }}
                                            >
                                              <div>
                                                {item.jobskkers_detail
                                                  .country_id && (
                                                  <p
                                                    style={{
                                                      margin: "0px",
                                                    }}
                                                  >
                                                    {getSingleCountry(
                                                      item.jobskkers_detail
                                                        .country_id
                                                    )}
                                                  </p>
                                                )}
                                              </div>
                                              <div>
                                                {item.jobskkers_detail
                                                  .state_id && (
                                                  <p
                                                    style={{
                                                      margin: "0px",
                                                    }}
                                                  >
                                                    {getSingleState(
                                                      item.jobskkers_detail
                                                        .state_id
                                                    )}
                                                  </p>
                                                )}
                                              </div>
                                              <div>
                                                {item.jobskkers_detail
                                                  .city_id && (
                                                  <p
                                                    style={{
                                                      margin: "0px",
                                                    }}
                                                  >
                                                    {getSingleCity(
                                                      item.jobskkers_detail
                                                        .city_id
                                                    )}
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
                        <div>
                          <div className="candidate-title">
                            <Link to="#">
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
                                <div className="d-flex" style={{ gap: "7px" }}>
                                  {selectedJob.jobskkers_detail.skills_arr.map(
                                    (item, index) => (
                                      <p key={index} className="mb-5">
                                        {item}
                                      </p>
                                    )
                                  )}
                                </div>
                              ) : null}
                              {selectedJob.jobskkers_detail.city_id ||
                              selectedJob.jobskkers_detail.state_id ||
                              selectedJob.jobskkers_detail.country_id ? (
                                <p className="mb-0 ">
                                  {getSingleCity(
                                    selectedJob.jobskkers_detail.city_id
                                  )}{" "}
                                  {getSingleState(
                                    selectedJob.jobskkers_detail.state_id
                                  )}{" "}
                                  {getSingleCountry(
                                    selectedJob.jobskkers_detail.country_id
                                  )}
                                </p>
                              ) : null}
                            </div>
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
                          {selectedJob.jobskkers_detail.created_at && (
                            <p className="mb-0 ">
                              Posted{" "}
                              {moment(
                                selectedJob.jobskkers_detail.created_at
                              ).fromNow()}
                            </p>
                          )}

                          {selectedJob.jobskkers_detail
                            .resume_score_percentage ? (
                            <p>
                              {
                                selectedJob.jobskkers_detail
                                  .resume_score_percentage
                              }
                            </p>
                          ) : null}
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
