import React, { useEffect, useState } from "react";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "./../Element/Profilesidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FixedHeader from "../Layout/fixedHeader";
import axios from "axios"

import {
  setSkillTestQuestions
} from "../../store/reducers/skillTestQuestionsSlice";

import { useDispatch } from "react-redux";
import LoadingBox from "../skeleton/skillTest";
import Preloader from "../Layout/preloader";

function SkillTest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [skeleton, setSkeleton] = useState(true);
  const token = localStorage.getItem("jobSeekerLoginToken");
  const getSkillTestQuestion = async (id, name) => {
    await axios({
      method: "get",
      url: `https://novajobs.us/api/jobseeker/skill-assessment?skill_id=${id}&skill_name=${name}`,
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setLoader(false);

        navigate("/user/education-page");
        dispatch(setSkillTestQuestions(response.data.data));
      })
      .catch((err) => console.log(err));
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://novajobs.us/api/jobseeker/user-skills",
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        setCardData(response.data.data);

        setSkeleton(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleViewDetails = (card) => {
    setSelectedCard(card);
  };
  const [loader, setLoader] = useState(null);
  const handleButtonClick = () => {
    setLoader(true);
  };

  return (
    <>
      {loader === true ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          <Header2 />
          <FixedHeader />

          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white browse-job p-t50 p-b20">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 m-b30">
                      <div className="sticky-top">
                        <div className="candidate-info">
                          {/* <div className="candidate-detail text-center">
                            <div className="canditate-des">
                              <Link to={""}>
                                <img
                                  alt=""
                                  src={require("./../../images/team/pic1.jpg")}
                                />
                              </Link>
                              <div
                                className="upload-link"
                                title="update"
                                data-toggle="tooltip"
                                data-placement="right"
                              >
                                <input type="file" className="update-flie" />
                                <i className="fa fa-camera"></i>
                              </div>
                            </div>
                            <div className="candidate-title">
                              <div className="">
                                <h4 className="m-b5">
                                  <Link to={"#"}>David Matin</Link>
                                </h4>
                                <p className="m-b0">
                                  <Link to={"#"}>Web developer</Link>
                                </p>
                              </div>
                            </div>
                          </div> */}
                          <ul>
                            <li>
                              <Link to={"/user/jobs-profile"}>
                                <i
                                  className="fa fa-user-o"
                                  aria-hidden="true"
                                ></i>
                                <span>Profile</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/user/jobs-my-resume"}>
                                <i
                                  className="fa fa-file-text-o"
                                  aria-hidden="true"
                                ></i>
                                <span>My Resume</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/user/jobs-saved-jobs"}>
                                <i
                                  className="fa fa-heart-o"
                                  aria-hidden="true"
                                ></i>
                                <span>Saved Jobs</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/user/jobs-applied-job"}>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                <span>Applied Jobs</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/user/jobs-alerts"}>
                                <i
                                  className="fa fa-bell-o"
                                  aria-hidden="true"
                                ></i>
                                <span>Job Alerts</span>
                              </Link>
                            </li>
                            {/* <li>
                              <Link to={"/user/jobs-cv-manager"}>
                                <i
                                  className="fa fa-id-card-o"
                                  aria-hidden="true"
                                ></i>
                                <span>CV Manager</span>
                              </Link>
                            </li> */}
                            <li>
                              <Link to={"/user/skill-test"} className="active">
                                <i
                                  className="fa fa-id-card-o"
                                  aria-hidden="true"
                                ></i>
                                <span>Skill Test</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/user/jobs-change-password"}>
                                <i className="fa fa-key" aria-hidden="true"></i>
                                <span>Change Password</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"./"}>
                                <i
                                  className="fa fa-sign-out"
                                  aria-hidden="true"
                                ></i>
                                <span>Log Out</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 m-b30">
                      <div className="job-bx job-profile">
                        {skeleton === true ? (
                          <LoadingBox />
                        ) : (
                          <div className="row">
                            {cardData.map((card, index) => (
                              <div
                                key={index}
                                className="col-lg-6 col-sm-12 col-md-6 col-12 mt-4"
                              >
                                <div
                                  className="card"
                                  style={{
                                    background: "#e1e7ff",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    height: "200px",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    alignItem: "centre",
                                  }}
                                >
                                  <div
                                    className="card-body text-center"
                                    style={{ transition: "box-shadow 0.3s" }}
                                  >
                                    <h5 className="card-title">{card.name}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                      <button
                                        onClick={() => {
                                          handleButtonClick();
                                          getSkillTestQuestion(
                                            card.id,
                                            card.name
                                          );
                                        }}
                                        className="btn site-button"
                                      >
                                        ReTake Test
                                      </button>

                                      {/* <button
                                  className="btn site-button ml-2"
                                  onClick={() => handleViewDetails(card)}>
                                  View Details
                                </button> */}
                                    </div>
                                    <div
                                      className="d-flex flex-wrap  align-items-center justify-content-center "
                                      style={{ gap: "7px" }}
                                    >
                                      <h3
                                        style={{
                                          fontWeight: "600",
                                          fontSize: "16px",
                                          marginBottom: "0px",
                                        }}
                                      >
                                        Total Questions :{" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {
                                            card.skill_assessment.results
                                              .total_question
                                          }
                                        </span>
                                      </h3>
                                      <h3
                                        style={{
                                          fontWeight: "600",
                                          fontSize: "16px",
                                          marginBottom: "0px",
                                        }}
                                      >
                                        Right Answers :{" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {
                                            card.skill_assessment.results
                                              .right_answer
                                          }
                                        </span>
                                      </h3>
                                      <h3
                                        style={{
                                          fontWeight: "600",
                                          fontSize: "16px",
                                          marginBottom: "0px",
                                        }}
                                      >
                                        Wrong Answers :{" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {
                                            card.skill_assessment.results
                                              .wrong_answer
                                          }
                                        </span>
                                      </h3>
                                      <h3
                                        style={{
                                          fontWeight: "600",
                                          fontSize: "16px",
                                          marginBottom: "0px",
                                        }}
                                      >
                                        Percentage :{" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {
                                            card.skill_assessment.results
                                              .Percentage
                                          }
                                        </span>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />

          {selectedCard && (
            <div
              className="modal"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div
                className="modal-content text-center"
                style={{
                  width: "25%",
                  margin: "auto",
                  marginTop: "100px",
                  background: "#fff",
                  padding: "20px",
                }}
              >
                <h5 className="mb-2">{selectedCard.title}</h5>
                <p>{selectedCard.text}</p>
                <button
                  className="btn site-button"
                  onClick={() => setSelectedCard(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SkillTest;
