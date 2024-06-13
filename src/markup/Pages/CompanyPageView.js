import React, { useEffect, useState } from "react";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import "../../css/Profile.css";
import Header from "./../Layout/Header";
import Footer from "../Layout/Footer";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import coverImg from "../../images/Minimal Blue Professional Badge Seek Cover Image (4).jpg";
const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [companyData, setCompany] = useState(null);
  const [jobData, setJobData] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const token = localStorage.getItem("jobSeekerLoginToken");

  const { id } = useParams();
  const handleGetRequest = () => {
    axios({
      method: "GET",
      url: `https://novajobs.us/api/jobseeker/companies/${id}`,

      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        setCompany(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const handleGetJobRequest = () => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/job-lists?company_id=1",

      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        setJobData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetJobRequest();
    handleGetRequest();
  }, []);
  return (
    <>
      {companyData ? (
        <div>
          <Header />

          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white p-t50 p-b20">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="profile-summary">
                        <div className="p-content">
                          <div className="profile-card">
                            <img
                              src={coverImg}
                              alt="Profile"
                              className="cover-picture"
                            />
                            <img
                              style={{
                                borderRadius: "0%",
                                marginInlineStart: "25px",
                              }}
                              src="/static/media/pic1.63e5cf4e.jpg"
                              alt="Profile"
                              className="profile-picture"
                            />
                          </div>
                          <div style={{ padding: "10px 30px" }}>
                            {companyData.company_name ? (
                              <h2 className="mb-0">
                                {companyData.company_name}
                              </h2>
                            ) : null}
                            {companyData.tagline ? (
                              <h6 className="mb-0">{companyData.tagline}</h6>
                            ) : null}
                            {companyData.country.name ||
                            companyData.state.name ||
                            companyData.city.name ||
                            companyData.zip_code ? (
                              <p className="mb-0">
                                <strong
                                  style={{
                                    fontWeight: "900",
                                  }}
                                >
                                  {companyData.country.name},
                                  {companyData.state.name},
                                  {companyData.city.name},{" "}
                                  {companyData.zip_code}
                                </strong>
                              </p>
                            ) : null}

                            <div>
                              <div className="tab-buttons">
                                <button
                                  className={
                                    activeTab === "home" ? "active" : ""
                                  }
                                  onClick={() => handleTabClick("home")}
                                >
                                  Home
                                </button>
                                <button
                                  className={
                                    activeTab === "jobs" ? "active" : ""
                                  }
                                  onClick={() => handleTabClick("jobs")}
                                >
                                  Jobs
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-4 profile-summary"
                        style={{ padding: "10px 30px" }}
                      >
                        <div className="candidate-info company-info">
                          <div className="tab-content">
                            {activeTab === "home" && (
                              <div>
                                {companyData.about ? (
                                  <div>
                                    <h4 className="mb-2 mt-4">About</h4>
                                    <p>{companyData.about}</p>
                                  </div>
                                ) : null}
                                {companyData.summery ? (
                                  <div>
                                    <h4 className="mb-2 mt-4">Summary</h4>
                                    <p>{companyData.summery}</p>
                                  </div>
                                ) : null}
                                {companyData.company_size.name ||
                                companyData.company_size.range ? (
                                  <div>
                                    <h4 className="mb-2 mt-4">Size & Range</h4>
                                    <p>
                                      {companyData.company_size.name}
                                      {companyData.company_size.range}
                                    </p>
                                  </div>
                                ) : null}
                                {companyData.email ? (
                                  <div>
                                    <h4 className="mb-2 mt-4">Email</h4>
                                    <p>{companyData.email}</p>
                                  </div>
                                ) : null}
                                {companyData.founded_date ? (
                                  <div>
                                    <h4 className="mb-2 mt-4">Founded year</h4>
                                    <p>
                                      {moment(companyData.founded_date).format(
                                        "YYYY-MM-DD"
                                      )}
                                    </p>
                                  </div>
                                ) : null}
                              </div>
                            )}

                            {activeTab === "jobs" && (
                              <div>
                                <div className="candidate-info company-info">
                                  <h4 className="mb-2 mt-4">
                                    Recent job openings
                                  </h4>
                                  <div className="job-list-container">
                                    {jobData.map((item) => (
                                      <div className="d-flex justify-content-start aligns-item-center ">
                                        <div>
                                          <i
                                            className="fa fa-user-o"
                                            aria-hidden="true"
                                          ></i>
                                        </div>
                                        <div className="ml-2">
                                          {item.job_detail.job_title ? (
                                            <h6
                                              className="mb-0 "
                                              onClick={() => {
                                                navigate(
                                                  `/user/job-detail/${item.job_detail.id}`
                                                );
                                              }}
                                            >
                                              {item.job_detail.job_title}
                                            </h6>
                                          ) : null}
                                          {item.job_type.name ||
                                          item.experience_level.name ||
                                          item.job_workplace_types.name ? (
                                            <p
                                              className=""
                                              style={{ color: "#1c2957" }}
                                            >
                                              {item.job_type.name},
                                              {item.experience_level.name},
                                              {item.job_workplace_types.name},
                                            </p>
                                          ) : null}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeTab === "people" && (
                              <div
                                className="mt-4 profile-summary"
                                style={{ padding: "10px 30px" }}
                              >
                                <div className="candidate-info company-info">
                                  <h6 className="mb-2 mt-2">
                                    4 associated members
                                  </h6>
                                  <div
                                    className="job-list-container mt-2"
                                    style={{ borderBottom: "1px solid gray" }}
                                  >
                                    <div className="d-flex justify-content-start aligns-item-center ">
                                      <div>
                                        <i
                                          className="fa fa-user-o"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <div className="ml-2">
                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                          ABC
                                        </h6>
                                        <p
                                          className="mb-0"
                                          style={{ color: "#1c2957" }}
                                        >
                                          I help people understand and apply AI
                                        </p>
                                        <div className="job-time m-t15 m-b10">
                                          <a className="mr-1" href="#">
                                            <span
                                              style={{
                                                padding: "5px 15px",
                                                borderRadius: "100px",
                                              }}
                                            >
                                              + Follow
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="job-list-container mt-2"
                                    style={{ borderBottom: "1px solid gray" }}
                                  >
                                    <div className="d-flex justify-content-start aligns-item-center ">
                                      <div>
                                        <i
                                          className="fa fa-user-o"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <div className="ml-2">
                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                          ABC
                                        </h6>
                                        <p
                                          className="mb-0"
                                          style={{ color: "#1c2957" }}
                                        >
                                          I help people understand and apply AI
                                        </p>
                                        <div className="job-time m-t15 m-b10">
                                          <a className="mr-1" href="#">
                                            <span
                                              style={{
                                                padding: "5px 15px",
                                                borderRadius: "100px",
                                              }}
                                            >
                                              + Follow
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="job-list-container mt-2"
                                    style={{ borderBottom: "1px solid gray" }}
                                  >
                                    <div className="d-flex justify-content-start aligns-item-center ">
                                      <div>
                                        <i
                                          className="fa fa-user-o"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <div className="ml-2">
                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                          ABC
                                        </h6>
                                        <p
                                          className="mb-0"
                                          style={{ color: "#1c2957" }}
                                        >
                                          I help people understand and apply AI
                                        </p>
                                        <div className="job-time m-t15 m-b10">
                                          <a className="mr-1" href="#">
                                            <span
                                              style={{
                                                padding: "5px 15px",
                                                borderRadius: "100px",
                                              }}
                                            >
                                              + Follow
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="job-list-container mt-2"
                                    style={{ borderBottom: "1px solid gray" }}
                                  >
                                    <div className="d-flex justify-content-start aligns-item-center ">
                                      <div>
                                        <i
                                          className="fa fa-user-o"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <div className="ml-2">
                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                          ABC
                                        </h6>
                                        <p
                                          className="mb-0"
                                          style={{ color: "#1c2957" }}
                                        >
                                          I help people understand and apply AI
                                        </p>
                                        <div className="job-time m-t15 m-b10">
                                          <a className="mr-1" href="#">
                                            <span
                                              style={{
                                                padding: "5px 15px",
                                                borderRadius: "100px",
                                              }}
                                            >
                                              + Follow
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
                      <div
                        className="mt-4 profile-summary"
                        style={{ padding: "10px 30px" }}
                      >
                        <div className="candidate-info company-info">
                          <h6 className="mb-2 mt-2">
                            Pages people also viewed
                          </h6>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}
                          >
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  IT Services and IT Consulting
                                </p>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  5,329,878 followers
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#">
                                    <span
                                      style={{
                                        padding: "5px 15px",
                                        borderRadius: "100px",
                                      }}
                                    >
                                      + Follow
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}
                          >
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  IT Services and IT Consulting
                                </p>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  5,329,878 followers
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#">
                                    <span
                                      style={{
                                        padding: "5px 15px",
                                        borderRadius: "100px",
                                      }}
                                    >
                                      + Follow
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}
                          >
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  IT Services and IT Consulting
                                </p>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  5,329,878 followers
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#">
                                    <span
                                      style={{
                                        padding: "5px 15px",
                                        borderRadius: "100px",
                                      }}
                                    >
                                      + Follow
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}
                          >
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  IT Services and IT Consulting
                                </p>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}
                                >
                                  5,329,878 followers
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#">
                                    <span
                                      style={{
                                        padding: "5px 15px",
                                        borderRadius: "100px",
                                      }}
                                    >
                                      + Follow
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default CompanyPage;
