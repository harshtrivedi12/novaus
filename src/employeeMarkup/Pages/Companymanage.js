import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import CompanySideBar from "../Layout/companySideBar";
import axios from "axios";
import JobPageSkeleton from "../../markup/skeleton/jobPage";
import moment from "moment";
function EmployeeCompanymanage() {
  const [skeleton, setSkeleton] = useState(true);
  const [company, setCompany] = useState(false);
  const token = localStorage.getItem("employeeLoginToken");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [btn, setBtn] = useState("");
  useEffect(() => {
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
        setSkeleton(false);
        setBtn("View");
      })
      .catch((err) => {
        console.log(err);
      });
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
        setBtn("Published");
        setSkeleton(false);
      })
      .catch((err) => {
        console.log(err);
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

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
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
                          <button
                            onClick={fetchDraftJobs}
                            className="site-button"
                            style={{ fontSize: "14px" }}
                          >
                            Draft
                          </button>
                          <button
                            onClick={fetchPublishedJobs}
                            className="site-button"
                            style={{ fontSize: "14px" }}
                          >
                            Published
                          </button>
                        </div>
                        {/* <span className="select-title">Sort by freshness</span>
                        <select className="custom-btn">
                          <option>All</option>
                          <option>None</option>
                          <option>Read</option>
                          <option>Unread</option>
                          <option>Starred</option>
                          <option>Unstarred</option>
                        </select> */}
                      </div>
                    </div>
                    {skeleton === true ? (
                      <JobPageSkeleton />
                    ) : (
                      <ul className="post-job-bx browse-job">
                        {data.map((item, index) => {
                          const formattedDate = moment(
                            item.job_detail.created_at
                          ).format("YYYY-MM-DD");
                          return (
                            <li key={index}>
                              <div className="post-bx d-flex w-100 justify-content-between ">
                                <div className="job-post-info m-a0">
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
                                        <p>
                                          {item.job_category.name}
                                          {" | "}{" "}
                                        </p>
                                      ) : null}
                                      {item.job_type.name ? (
                                        <p>
                                          {item.job_type.name}
                                          {" | "}{" "}
                                        </p>
                                      ) : null}{" "}
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
                                      className="mb-2"
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
                                      <span className="text-black ">
                                        Draft *
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
                                      borderRadius: "7px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {btn}
                                  </button>
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
    </>
  );
}
export default EmployeeCompanymanage;
