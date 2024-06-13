import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import CompanySideBar from "../Layout/companySideBar";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import JobPageSkeleton from "../../markup/skeleton/jobPage";
import moment from "moment";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaX } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function EmployeeCompanymanage() {
  const [skeleton, setSkeleton] = useState(true);
  const [company, setCompany] = useState(false);
  const token = localStorage.getItem("employeeLoginToken");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [btn, setBtn] = useState("");

  useEffect(() => {
    fetchPublishedJobs();
  }, []);


  const fetchDraftJobs = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/job-lists?is_publish=0",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, "draft");
        setData(response.data.data);
        setBtn("View");

        setSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };
  const fetchPublishedJobs = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/employeer/job-lists?is_publish=1",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data, "published");
        setData(response.data.data);
        setBtn("Edit Job");
        setSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message);
      });
  };
  const handlePutReq = (id) => {
    console.log(id, "id");
    axios({
      method: "PUT",
      url: `https://novajobs.us/api/employeer/job-post/${id}`,
      headers: {
        Authorization: token,
      },
      data: {
        is_publish: 1,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err, "error"));
  };
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = (index) => {
    setShowOptions(index === showOptions ? null : index);
  };

  const [tabs, setTabs] = useState(false);
  const handleTabs = (index) => {
    setTabs(index === tabs ? null : index);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("8am - 12pm");

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("en-CA");
    setSelectedDate(formattedDate);
  };

  const handleTimeSlotChange = (slot) => {
    setTimeSlot(slot);
  };

  console.log(selectedDate, timeSlot);

  const [shortNoteValue, setShortNoteValue] = useState("");
  const handleShortNoteValue = (e) => {
    setShortNoteValue(e.target.value);
  };

  const [rejectWithNote, setRejectWithNote] = useState("");
  const handleRejectWithNote = (e) => {
    setRejectWithNote(e.target.value);
  };
  return (
    <div className="position-relative">
      <Header2 />
      <div className="page-content bg-white ">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CompanySideBar active="company-manage-job" />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx browse-job clearfix">
                    <div className="job-bx-title  clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Manage jobs
                      </h5>
                      <div className="float-right">
                        <div
                          style={{ gap: "7px" }}
                          className="d-flex align-items-center justify-content-center "
                        >
                        {/*<button
                          onClick={fetchDraftJobs}
                          className="site-button"
                          style={{ fontSize: "14px" }}
                        >
                          Draft
                        </button>*/}
                          <button
                            onClick={fetchPublishedJobs}
                            className="site-button"
                            style={{ fontSize: "14px" }}
                          >
                            Published
                          </button>
                        </div>
                      </div>
                    </div>
                    {skeleton === true ? (
                      <JobPageSkeleton />
                    ) : (
                      <ul className="post-job-bx browse-job">
                        {data.map((item, index) => {
                          const formattedDate = moment(
                            item.job_detail.created_at
                          ).format("MMMM-DD-YYYY");
                          return (
                            <li key={index} className="position-relative">
                              <div className="post-bx d-flex w-100 justify-content-between ">
                                <div className="job-post-info m-a0">
                                {console.log('yehi h console',item.job_detail)}
                                  {item.job_detail.job_title ? (
                                    <h4 className="mb-0">
                                      <a href="/react/demo/job-detail">
                                        {item.job_detail.job_title}
                                      </a>
                                    </h4>
                                  ) : null}
                                  {item.job_category.name ||
                                  item.job_type.name ||
                                  item.job_workplace_types.name ? (
                                    <div className="row">
                                      {item.job_category.name ? (
                                        <p className="ml-3">
                                          {item.job_category.name}
                                          {" |"}{" "}
                                        </p>
                                      ) : null}
                                      {item.job_type.name ? (
                                        <p className="ml-3">
                                          {item.job_type.name}
                                          {"| "}{" "}
                                        </p>
                                      ) : null}{" "}
                                     {item.job_detail.skills_arr ? (
                                       <div className="mx-1">
                                            {item.job_detail.skills_arr.map((skill, index) => (
                                                   <span key={index} className="badge badge-primary mr-1 mb-1">
                                                            {skill}
                                                                </span>  ))}
                                                                </div>
                                                              ) : null}{" | "}

                                    {" "}
                                      {item.job_workplace_types.name ? (
                                        <p>{item.job_workplace_types.name}</p>
                                      ) : null}
                                    </div>
                                  ) : null}
                                  {item.experience_level.name ? (
                                    <p className="mb-2">
                                      Experience:
                                      {item.experience_level.name}
                                    </p>
                                  ) : null}
                                  {item.cities.name ||
                                  item.states.name ||
                                  item.countries.name ? (
                                    <p
                                      style={{ color: "#232323" }}
                                      className="mb-2 "
                                    >
                                      {" "}
                                      <i className="fa fa-map-marker"></i>{" "}
                                      {item.cities.name ? (
                                        <span>
                                          {item.cities.name} {" | "}
                                        </span>
                                      ) : null}{" "}
                                      {item.states.name ? (
                                        <span>
                                          {item.states.name}
                                          {" | "}
                                        </span>
                                      ) : null}{" "}
                                      {item.countries.name ? (
                                        <span>{item.countries.name}</span>
                                      ) : null}
                                    </p>
                                  ) : null}
                                  {item.job_detail.created_at ? (
                                    <p className="mb-0">
                                      {" "}
                                      <span className="text-black mr-2">
                                        Posted on* 
                                      </span>
                                      {formattedDate}
                                    </p>
                                  ) : null}
                                </div>
                                <div
                                  className="d-flex flex-row justify-content-center align-items-center "
                                  style={{ gap: "12px" }}
                                >
                                   
                                  <button
                                    onClick={() => {
                                      // handlePutReq(item.job_detail.id);
                                      navigate(
                                        `/employee/company-post-jobs/${item.job_detail.id}`
                                      );
                                    }}
                                    className="px-3 py-2 site-button text-white border-0"
                                    style={{
                                      
                                      cursor: "pointer",
                                    }}
                                  >
                                    {btn}
                                  </button>
                                  
                                  {showOptions === index ? (
                                    <FaX
                                      onClick={() => handleShowOptions(index)}
                                      style={{ cursor: "pointer" }}
                                    />
                                  ) : (
                                    
                                    <Link
                                    to={"/employee/company-resume"}
                                    className="px-3 py-2 site-button text-white border-0"
                                  >
                                    <i className="fa fa-id-card-o mr-1" aria-hidden="true"></i>
                                    <span>Applicants</span>
                                  </Link>
                                  )}
                                  {/* <button
                                  className="px-3 site-button py-2  text-white border-0"
                                  style={{
                                    borderRadius: "7px",
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                  }}
                                >
                                  Draft
                                </button> */}
                                </div>
                                
                              </div>
                              
                              {showOptions === index ? (
                                <div
                                  style={{
                                    position: "absolute",
                                    width: "30%",
                                    textAlign: "center",
                                    zIndex: 4,
                                    right: "-50px",
                                    top: "100px",
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    boxShadow:
                                      "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    border: "1px solid #e2e8f0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0px",
                                  }}
                                >
                                  <p
                                    onClick={() => {
                                      handleTabs("shortNote");
                                      setShowOptions(false);
                                    }}
                                    style={{
                                      borderBottom: "1px solid #e2e8f0",
                                      padding: "7px",
                                      cursor: "pointer",
                                      fontSize: "12px",
                                      margin: "0px",
                                    }}
                                  >
                                    Short Note
                                  </p>
                                  <p
                                    onClick={() => {
                                      handleTabs("rejectWithNote");
                                      setShowOptions(false);
                                    }}
                                    style={{
                                      borderBottom: "1px solid #e2e8f0",
                                      cursor: "pointer",
                                      padding: "7px",

                                      fontSize: "12px",
                                      margin: "0px",
                                    }}
                                  >
                                    Reject with Note
                                  </p>
                                  <p
                                    onClick={() => {
                                      handleTabs("scheduleInterview");
                                      setShowOptions(false);
                                    }}
                                    style={{
                                      borderBottom: "1px solid #e2e8f0",
                                      cursor: "pointer",
                                      padding: "7px",

                                      fontSize: "12px",
                                      color: "#1c2957",
                                      margin: "0px",
                                    }}
                                  >
                                    Schedule Interview
                                  </p>
                                </div>
                                
                              ) : null}
                              <button
                                    
                                    className="px-3 py-2 site-button text-white border-0 float-right mb-2"
                                    style={{
                                      
                                      cursor: "pointer",
                                    }}
                                  >
                                    Share
                                  </button>
                            </li>
                            
                          );
                          
                        })}
                        
                      </ul>
                      
                    )}

                    <div className="pagination-bx m-t30 float-right">
                      <ul className="pagination">
                        <li className="previous">
                          <Link to={"#"}>
                            <i className="ti-arrow-left"></i> Prev
                          </Link>
                        </li>
                        <li className="active">
                          <Link to={"#"}>1</Link>
                        </li>
                        <li>
                          <Link to={"#"}>2</Link>
                        </li>
                        <li>
                          <Link to={"#"}>3</Link>
                        </li>
                        <li className="next">
                          <Link to={"#"}>
                            Next <i className="ti-arrow-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Modal
                      show={company}
                      onHide={setCompany}
                      className="modal fade modal-bx-info"
                    >
                      <div className="modal-dialog my-0" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="logo-img">
                              <img
                                alt=""
                                src={require("./../../images/logo/icon2.png")}
                              />
                            </div>
                            <h5 className="modal-title">Company Name</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={() => setCompany(false)}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <strong>Job Title :</strong>
                                <p> Web Developer – PHP, HTML, CSS </p>
                              </li>
                              <li>
                                <strong>Experience :</strong>
                                <p>5 Year 3 Months</p>
                              </li>
                              <li>
                                <strong>Deseription :</strong>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry has been the
                                  industry's standard dummy text ever since.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => setCompany(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {tabs === "scheduleInterview" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: "99",
            display: "flex",
            flexDirection: "column",
            padding: "150px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "1.25rem",
              borderWidth: "1px",
              width: "100%",
              maxWidth: "70%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                marginTop: "0.75rem",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: "1.3em",
                  fontWeight: "medium",
                  color: "#333",
                }}
              >
                Schedule Interview
              </h3>
              <div style={{ width: "100%" }}>
                <DatePicker
                  inline
                  selected={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                  "@media (min-width: 640px)": { flexDirection: "row" },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "7px",
                      backgroundColor:
                        timeSlot === "8am - 12pm" ? "#3182ce" : "transparent",
                      color: timeSlot === "8am - 12pm" ? "white" : "#333",
                      border:
                        timeSlot === "8am - 12pm" ? "none" : "1px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => handleTimeSlotChange("8am - 12pm")}
                  >
                    8am - 12pm
                  </button>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "7px",
                      backgroundColor:
                        timeSlot === "12pm - 5pm" ? "#3182ce" : "transparent",
                      color: timeSlot === "12pm - 5pm" ? "white" : "#333",
                      border:
                        timeSlot === "12pm - 5pm" ? "none" : "1px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => handleTimeSlotChange("12pm - 5pm")}
                  >
                    12pm - 5pm
                  </button>
                </div>
                <button className="site-button" type="button">
                  Schedule
                </button>
              </div>
            </div>
            <button
              onClick={() => handleTabs(false)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <FaX />
            </button>
          </div>
        </div>
      ) : null}

      {tabs === "shortNote" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: "99",
            display: "flex",
            flexDirection: "column",
            padding: "150px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "1.25rem",
              borderWidth: "1px",
              width: "100%",
              maxWidth: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                marginTop: "0.75rem",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <label
                htmlFor="shortNoteValue"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.3em",
                  fontWeight: "medium",
                  color: "#333",
                }}
              >
                Short Note
              </label>
              <textarea
                type="text"
                name="shortNoteValue"
                id="shortNoteValue"
                onChange={handleShortNoteValue}
                value={shortNoteValue}
                className="form-control"
                style={{ height: "150px" }}
              />
              <button className="site-button">Submit</button>
            </div>
            <button
              onClick={() => handleTabs(false)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <FaX />
            </button>
          </div>
        </div>
      ) : null}

      {tabs === "rejectWithNote" ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: "99",
            display: "flex",
            flexDirection: "column",
            padding: "150px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "1.25rem",
              borderWidth: "1px",
              width: "100%",
              maxWidth: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                marginTop: "0.75rem",
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <label
                htmlFor="rejectWithNote"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.3em",
                  fontWeight: "medium",
                  color: "#333",
                }}
              >
                Reject with Note
              </label>
              <textarea
                type="text"
                name="rejectWithNote"
                id="rejectWithNote"
                onChange={handleRejectWithNote}
                value={rejectWithNote}
                className="form-control"
                style={{ height: "150px" }}
              />
              <button className="site-button">Submit</button>
            </div>
            <button
              onClick={() => handleTabs(false)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <FaX />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default EmployeeCompanymanage;
