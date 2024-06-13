import React, { useState } from "react";

import "../../css/Profile.css";
import Header2 from "../Layout/Header2";
import Footer from "../Layout/Footer";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import { useEffect } from "react";
import coverImg from "../../images/blue.jpg";
import moment from "moment";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const token = localStorage.getItem("employeeLoginToken");
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const getUser = async () => {
    try {
      await axios({
        url: `https://novajobs.us/api/employeer/job-seekers/${id}`,
        method: "GET",
        headers: { Authorization: token },
      })
        .then((res) => {
          console.log(res);
          setUserData(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {userData ? (
        <div>
          <Header2 />
          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white p-t50 p-b20">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="profile-summary">
                        <div className="p-content">
                          <div className="profile-card">
                            <img
                              src={coverImg}
                              alt="Profile"
                              className="cover-picture"
                            />
                            <img
                              src={`https://novajobs.us${userData.jobskkers_detail.photo}`}
                              alt="Profile"
                              roundedCircle
                              className="profile-picture"
                            />
                          </div>
                          <div style={{ padding: "10px 30px" }}>
                            {userData.jobskkers_detail.first_name ||
                            userData.jobskkers_detail.last_name ? (
                              <h2 className="mb-0">
                                {userData.jobskkers_detail.first_name}{" "}
                                {userData.jobskkers_detail.last_name}
                              </h2>
                            ) : null}
                            {userData.jobskkers_detail.countries.name ||
                            userData.jobskkers_detail.states.name ||
                            userData.jobskkers_detail.cities.name ? (
                              <h6 className="mb-0">
                                {userData.jobskkers_detail.countries.name} |
                                {userData.jobskkers_detail.states.name} |
                                {userData.jobskkers_detail.cities.name}
                              </h6>
                            ) : null}
                            <p className="mb-0">
                              MIT Sloan School of Management
                            </p>
                            <p className="mb-0">
                              1,623,846 followers 500+ connections
                            </p>

                            {userData.jobskkers_detail.countries.name ||
                            userData.jobskkers_detail.states.name ||
                            userData.jobskkers_detail.cities.name ? (
                              <p className="mb-0">
                                {userData.jobskkers_detail.countries.name} ,{" "}
                                {userData.jobskkers_detail.states.name} ,{" "}
                                {userData.jobskkers_detail.cities.name}
                              </p>
                            ) : null}
                            <div className="job-time m-t15 m-b10">
                              <a className="mr-1" href="#">
                                <span
                                  style={{
                                    padding: "5px 15px",
                                    borderRadius: "100px",
                                  }}>
                                  Message
                                </span>
                              </a>
                              <a className="mr-1" href="#">
                                <span
                                  style={{
                                    padding: "5px 15px",
                                    borderRadius: "100px",
                                  }}>
                                  Visit my website
                                </span>
                              </a>
                              <a className="mr-1" href="#">
                                <span
                                  style={{
                                    padding: "5px 15px",
                                    borderRadius: "100px",
                                  }}>
                                  More
                                </span>
                              </a>
                            </div>

                            <div className="post-bx">
                              <div className="job-post-info m-a0">
                                {userData.jobskkers_detail.ai_resume_parse_data
                                  .jobsMyResumeData.resumeHeadline ? (
                                  <div className="posted-info clearfix">
                                    <p className="m-tb0 text-primary ">
                                      {
                                        userData.jobskkers_detail
                                          .ai_resume_parse_data.jobsMyResumeData
                                          .resumeHeadline
                                      }
                                    </p>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-4 profile-summary"
                        style={{ padding: "10px 30px" }}>
                        <div className="candidate-info company-info">
                          {userData.jobskkers_detail.ai_resume_parse_data
                            .jobsMyResumeData.employmentData ? (
                            <div className="job-list-container">
                              <h4 className="mb-2 mt-4">Education</h4>
                              {userData.jobskkers_detail.ai_resume_parse_data.jobsMyResumeData.employmentData.map(
                                (item) => (
                                  <div className="d-flex justify-content-start aligns-item-center ">
                                    <div>
                                      <i
                                        className="fa fa-user-o"
                                        aria-hidden="true"></i>
                                    </div>
                                    <div className="ml-2">
                                      <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                        {item.jobTitle}
                                      </h6>
                                      <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                        {item.company}
                                      </h6>
                                      <p
                                        className="mb-0"
                                        style={{ color: "#1c2957" }}>
                                        {item.jobDescription}
                                      </p>
                                      <div className="job-time m-t15 m-b10"></div>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          ) : null}
                        </div>
                        <div className="candidate-info company-info">
                          {userData.jobskkers_detail.ai_resume_parse_data
                            .jobsMyResumeData.skillsData ? (
                            <div className="job-list-container">
                              <h4 className="mb-2 mt-4">Skills</h4>
                              <div className="job-time m-t15 m-b10">
                                {userData.jobskkers_detail.ai_resume_parse_data.jobsMyResumeData.skillsData.map(
                                  (item) => (
                                    <a className="mr-1" href="#">
                                      <span
                                        style={{
                                          padding: "5px 15px",
                                          borderRadius: "100px",
                                        }}>
                                        {item}
                                      </span>
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 ">
                      <div
                        className=" profile-summary"
                        style={{ padding: "10px 30px" }}>
                        <div className="candidate-info company-info">
                          <div className="job-list-container text-center">
                            <p
                              className=""
                              style={{
                                color: "#1c2957",
                                fontSize: "13px",
                                lineHeight: "20px",
                              }}>
                              Abc, unlock your full potential with linkedin
                              premium
                            </p>
                            <div className="d-flex justify-content-around aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                            </div>

                            <p
                              className="mb-2 mt-2"
                              style={{
                                color: "#1c2957",
                                fontSize: "15px",
                                lineHeight: "20px",
                              }}>
                              See who's viewed your profile in the last 90 days
                            </p>
                            <div className="job-time m-t15 m-b10">
                              <a className="mr-1" href="#">
                                <span
                                  style={{
                                    padding: "5px 15px",
                                    borderRadius: "100px",
                                  }}>
                                  Try for free
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-4 profile-summary"
                        style={{ padding: "10px 30px" }}>
                        <div className="candidate-info company-info">
                          <h6 className="mb-2 mt-2">Other similar profiles</h6>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}>
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}>
                                  I help people understand and apply AI
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#"></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}>
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}>
                                  I help people understand and apply AI
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#"></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}>
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}>
                                  I help people understand and apply AI
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#"></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="job-list-container mt-2"
                            style={{ borderBottom: "1px solid gray" }}>
                            <div className="d-flex justify-content-start aligns-item-center ">
                              <div>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"></i>
                              </div>
                              <div className="ml-2">
                                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                  ABC
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ color: "#1c2957" }}>
                                  I help people understand and apply AI
                                </p>
                                <div className="job-time m-t15 m-b10">
                                  <a className="mr-1" href="#"></a>
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

export default ProfilePage;
