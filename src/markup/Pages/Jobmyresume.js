import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Listingsidebar from "./../Element/Listingsidebar";
import Profilesidebar from "../Element/Profilesidebar";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setResumeData } from "../../store/reducers/jobsMyResumeSlice";
import { useEffect } from "react";
import JobPageSkeleton from "../skeleton/jobPage";
import FixedHeader from "../Layout/fixedHeader";

var bnr = require("./../../images/banner/bnr1.jpg");
//var bnr2 = require('./../../images/background/bg3.jpg');

function Jobmyresume() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const token = localStorage.getItem("jobSeekerLoginToken");
  const dispatch = useDispatch();
  const getResumeData = async () => {
    axios({
      url: "https://jobsbooklet.in/api/jobseeker/user-profile",
      method: "Get",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      dispatch(setResumeData(res.data.data.ai_resume_parse_data));
      setShowSkeleton(false);
    });
  };

  useEffect(() => {
    getResumeData();
  }, []);
  const [basicdetails, setBasicDetails] = useState(false);
  const [resume, setResume] = useState(false);
  const [keyskill, setKeyskill] = useState(false);
  const [employment, setEmployment] = useState(false);
  const [education, setEducation] = useState(false);
  const [itskills, setItSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [profilesummary, setProfileSummary] = useState(false);
  const [onlineprofile, setOnlineProfile] = useState(false);
  const [worksample, setWorkSample] = useState(false);
  const [whitepaper, setWhitePaper] = useState(false);
  const [presentation, setPresentation] = useState(false);
  const [patent, setPatent] = useState(false);
  const [certification, setCertification] = useState(false);
  const [careerprofile, setCareerProfile] = useState(false);
  const [personaldetails, setPersonalDetails] = useState(false);
  // redux imports
  const resumeHeadline = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.resumeHeadline
  );
  const skillsData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.skillsData
  );
  const employmentData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.employmentData
  );
  const educationData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.educationData
  );
  const itSkillsData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.itSkillsData
  );
  const projectsData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.projectsData
  );
  const profileSummaryValue = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.profileSummaryValue
  );

  const desiredCareerProfile = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.desiredCareerProfile
  );
  const personalDetails = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.personalDetails
  );
  const attachResumeValue = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.attachResumeValue
  );
  // accomplishments import
  const onlineProfileData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.onlineProfileData
  );
  const workSampleData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.workSampleData
  );
  const whitePaperData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.whitePaperData
  );
  const presentationData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.presentationData
  );
  const patentData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.patentData
  );
  const certificationData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.certificationData
  );

  return (
    <>
      <Header />
      <div className="page-content">
        {/* <div
          className="overlay-black-dark profile-edit p-t50 p-b20"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 candidate-info">
                <div className="candidate-detail">
                  <div className="canditate-des text-center">
                    <Link to={"#"}>
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
                  <div className="text-white browse-job text-left">
                    <h4 className="m-b0">
                      John Doe
                      <Link
                        to={"#"}
                        onClick={() => setBasicDetails(true)}
                        className="m-l15 font-16 text-white"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>
                    </h4>
                    <p className="m-b15">
                      Freelance Senior PHP Developer at various agencies
                    </p>
                    <ul className="clearfix">
                      <li>
                        <i className="ti-location-pin"></i> Sacramento,
                        California
                      </li>
                      <li>
                        <i className="ti-mobile"></i> +1 123 456 7890
                      </li>
                      <li>
                        <i className="ti-briefcase"></i> Fresher
                      </li>
                      <li>
                        <i className="ti-email"></i> info@example.com
                      </li>
                    </ul>
                    <div className="progress-box m-t10">
                      <div className="progress-info">
                        Profile Strength (Average)<span>70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "80%" }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
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
              </div>
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
        </div> */}
        <FixedHeader />
        <div className="content-block">
          <div className="section-full browse-job content-inner-2">
            <div className="container">
              <Link
                to={"/user/jobs-profile/"}
                className="site-button right-arrow button-sm float-left mt-3"
              >
                Back
              </Link>
              <div className="row flex-nowrap">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                  <Listingsidebar />
                </div>
                {showSkeleton === true ? (
                  <JobPageSkeleton />
                ) : (
                  <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                    {resumeHeadline ? (
                      <div
                        id="resume_headline_bx"
                        className=" job-bx bg-white m-b30"
                      >
                        <div className="d-flex">
                          <h5 className="m-b15">Resume Headline</h5>
                          <Link
                            to={"#"}
                            className="site-button add-btn button-sm"
                            onClick={() => setResume(true)}
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        <p className="m-b0">{resumeHeadline}</p>

                        <Modal
                          show={resume}
                          onHide={setResume}
                          className="modal fade modal-bx-info editor"
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="ResumeheadlineModalLongTitle"
                                >
                                  Resume Headline
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setResume(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  It is the first thing recruiters notice in
                                  your profile. Write concisely what makes you
                                  unique and right person for the job you are
                                  looking for.
                                </p>
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setResume(false)}
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
                    ) : null}

                    {skillsData ? (
                      <div id="key_skills_bx" className="job-bx bg-white m-b30">
                        <div className="d-flex">
                          <h5 className="m-b15">Key Skills</h5>
                          <Link
                            to={"#"}
                            data-toggle="modal"
                            data-target="#keyskills"
                            onClick={() => setKeyskill(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        <div className="job-time mr-auto">
                          {skillsData.map((item, index) => {
                            return (
                              <Link key={index} to={"#"} className="mr-1">
                                <span>{item}</span>
                              </Link>
                            );
                          })}
                        </div>

                        <Modal
                          show={keyskill}
                          onHide={setKeyskill}
                          className="modal fade modal-bx-info editor"
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="KeyskillsModalLongTitle"
                                >
                                  Key Skills
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setKeyskill(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  It is the first thing recruiters notice in
                                  your profile. Write concisely what makes you
                                  unique and right person for the job you are
                                  looking for.
                                </p>
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          className="form-control tags_input"
                                          defaultValue="html,css,bootstrap,photoshop"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setKeyskill(false)}
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
                    ) : null}

                    {employmentData ? (
                      <div
                        id="employment_bx"
                        className="job-bx bg-white m-b30 "
                      >
                        <div className="d-flex">
                          <h5 className="m-b15">Employment</h5>
                          <Link
                            to={"#"}
                            onClick={() => setEmployment(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        {employmentData.map((item, index) => {
                          return (
                            <div key={index}>
                              <h6 className="font-14 m-b0">{item.jobTitle}</h6>
                              <p className="m-b0">{item.company}</p>
                              <p className="m-b0">
                                {item.jobStartDate} {item.jobEndDate}
                              </p>
                              <p className="m-b0">{item.jobDescription}</p>
                            </div>
                          );
                        })}

                        <Modal
                          show={employment}
                          onHide={setEmployment}
                          className="modal fade modal-bx-info editor"
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="EmploymentModalLongTitle"
                                >
                                  Add Employment
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setEmployment(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Your Designation</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter Your Designation"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Your Organization</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter Your Organization"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>
                                          Is this your current company?
                                        </label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="custom-control custom-radio">
                                              <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="employ_yes"
                                                name="example1"
                                              />
                                              <label
                                                className="custom-control-label"
                                                htmlFor="employ_yes"
                                              >
                                                Yes
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="custom-control custom-radio">
                                              <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="employ_no"
                                                name="example1"
                                              />
                                              <label
                                                className="custom-control-label"
                                                htmlFor="employ_no"
                                              >
                                                No
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Started Working From</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                            </Form.Control>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>january</option>
                                              <option>february</option>
                                              <option>March</option>
                                              <option>April</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>July</option>
                                              <option>August</option>
                                              <option>September</option>
                                              <option>October</option>
                                              <option>November</option>
                                              <option>December</option>
                                            </Form.Control>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Worked Till</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                            </Form.Control>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>january</option>
                                              <option>february</option>
                                              <option>March</option>
                                              <option>April</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>July</option>
                                              <option>August</option>
                                              <option>September</option>
                                              <option>October</option>
                                              <option>November</option>
                                              <option>December</option>
                                            </Form.Control>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Describe your Job Profile</label>
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setEmployment(false)}
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
                    ) : null}

                    {educationData ? (
                      <div id="education_bx" className="job-bx bg-white m-b30">
                        <div className="d-flex">
                          <h5 className="m-b15">Education</h5>
                          <Link
                            to={"#"}
                            onClick={() => setEducation(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        <p>
                          Mention your employment details including your current
                          and previous company work experience
                        </p>

                        <Modal
                          className="modal fade modal-bx-info editor"
                          show={education}
                          onHide={setEducation}
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="EducationModalLongTitle"
                                >
                                  Education
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setEducation(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Education</label>
                                        <Form.Control as="select">
                                          <option>Doctorate/PhD</option>
                                          <option>
                                            Masters/Post-Graduation
                                          </option>
                                          <option>Graduation/Diploma</option>
                                        </Form.Control>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Course</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Select Course"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>University/Institute</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Select University/Institute"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setEducation(false)}
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

                        <div className="row">
                          {educationData.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="col-lg-12 col-md-12 col-sm-12"
                              >
                                <div className="clearfix m-b20">
                                  <label className="m-b0">
                                    {item.education} {item.university}
                                  </label>
                                  <span className="clearfix font-13">
                                    {item.course}
                                  </span>
                                  <span className="clearfix font-13">
                                    {item.passOut}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Link to={"#"} className="clearfix">
                          Add Doctorate/PhD
                        </Link>
                        <Link to={"#"} className="clearfix">
                          Add Masters/Post-Graduation
                        </Link>
                        <Link to={"#"} className="clearfix">
                          Add Graduation/Diploma
                        </Link>
                      </div>
                    ) : null}

                    {itSkillsData ? (
                      <div
                        id="it_skills_bx"
                        className="job-bx table-job-bx bg-white m-b30"
                      >
                        <div className="d-flex">
                          <h5 className="m-b15">IT Skills</h5>
                          <Link
                            to={"#"}
                            onClick={() => setItSkills(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        <p>
                          Mention your employment details including your current
                          and previous company work experience
                        </p>
                        <table>
                          <thead>
                            <tr>
                              <th>Skills</th>
                              <th>Version</th>
                              <th>Last Used</th>
                              <th>Experience</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {itSkillsData.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{item.skills}</td>
                                  <td>{item.version}</td>
                                  <td>{item.lastUsed}</td>
                                  <td>{item.experience}</td>
                                  <td>
                                    <Link
                                      to={"#"}
                                      className="m-l15 font-14"
                                      data-toggle="modal"
                                      data-target="#itskills"
                                    >
                                      <i className="fa fa-pencil"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>

                        <Modal
                          className="modal fade modal-bx-info editor"
                          show={itskills}
                          onHide={setItSkills}
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">IT Skills</h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setItSkills(false)}
                                >
                                  <span>&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>IT Skills</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter IT Skills"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label>Version</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter Version"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                      <div className="form-group">
                                        <label>Last Used</label>
                                        <Form.Control as="select">
                                          <option>2018</option>
                                          <option>2017</option>
                                          <option>2016</option>
                                          <option>2015</option>
                                          <option>2014</option>
                                          <option>2013</option>
                                          <option>2012</option>
                                          <option>2011</option>
                                          <option>2010</option>
                                          <option>2009</option>
                                          <option>2008</option>
                                          <option>2007</option>
                                          <option>2006</option>
                                          <option>2005</option>
                                          <option>2004</option>
                                          <option>2003</option>
                                          <option>2002</option>
                                          <option>2001</option>
                                        </Form.Control>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="form-group">
                                        <label>Experience</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                            </Form.Control>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>january</option>
                                              <option>february</option>
                                              <option>March</option>
                                              <option>April</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>July</option>
                                              <option>August</option>
                                              <option>September</option>
                                              <option>October</option>
                                              <option>November</option>
                                              <option>December</option>
                                            </Form.Control>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setItSkills(false)}
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
                    ) : null}

                    {projectsData ? (
                      <div id="projects_bx" className="job-bx bg-white m-b30">
                        <div className="d-flex">
                          <h5 className="m-b15">Projects</h5>
                          <Link
                            to={"#"}
                            onClick={() => setProjects(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        {projectsData.map((item, index) => {
                          return (
                            <div key={index}>
                              <h6 className="font-14 m-b0">
                                {item.projectTitle}
                              </h6>
                              <p className="m-b0">{item.clientName}</p>
                              <p className="m-b0">{item.projectStatus}</p>
                              <p className="m-b0">
                                {item.workStartedFromYear}{" "}
                                {item.workStartedFromMonth} -{" "}
                                {item.workedTillYear} {item.workedTillMonth}
                              </p>
                              <p className="m-b0">{item.projectDescription}</p>
                            </div>
                          );
                        })}

                        <Modal
                          className="modal fade modal-bx-info editor"
                          show={projects}
                          onHide={setProjects}
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="ProjectsModalLongTitle"
                                >
                                  Add Projects
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setProjects(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Project Title</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter Project Title"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>
                                          Tag this project with your
                                          Employment/Education
                                        </label>
                                        <select>
                                          <option>Class 12th</option>
                                          <option>Class 10th</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Client</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          placeholder="Enter Client Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Project Status</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="custom-control custom-radio">
                                              <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="inprogress"
                                                name="example1"
                                              />
                                              <label
                                                className="custom-control-label"
                                                htmlFor="inprogress"
                                              >
                                                In Progress
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <div className="custom-control custom-radio">
                                              <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="finished"
                                                name="example1"
                                              />
                                              <label
                                                className="custom-control-label"
                                                htmlFor="finished"
                                              >
                                                Finished
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="form-group">
                                        <label>Started Working From</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                            </Form.Control>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>january</option>
                                              <option>february</option>
                                              <option>March</option>
                                              <option>April</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>July</option>
                                              <option>August</option>
                                              <option>September</option>
                                              <option>October</option>
                                              <option>November</option>
                                              <option>December</option>
                                            </Form.Control>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="form-group">
                                        <label>Worked Till</label>
                                        <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                            </Form.Control>
                                          </div>
                                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <Form.Control as="select">
                                              <option>january</option>
                                              <option>february</option>
                                              <option>March</option>
                                              <option>April</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>July</option>
                                              <option>August</option>
                                              <option>September</option>
                                              <option>October</option>
                                              <option>November</option>
                                              <option>December</option>
                                            </Form.Control>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Details of Project</label>
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setProjects(false)}
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
                    ) : null}

                    {profileSummaryValue ? (
                      <div
                        id="profile_summary_bx"
                        className="job-bx bg-white m-b30"
                      >
                        <div className="d-flex">
                          <h5 className="m-b15">Profile Summary</h5>
                          <Link
                            to={"#"}
                            onClick={() => setProfileSummary(true)}
                            className="site-button add-btn button-sm"
                          >
                            <i className="fa fa-pencil m-r5"></i> Edit
                          </Link>
                        </div>
                        <p className="m-b0">{profileSummaryValue}</p>

                        <Modal
                          className="modal fade modal-bx-info editor"
                          show={profilesummary}
                          onHide={setProfileSummary}
                        >
                          <div className="modal-dialog my-0" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Profile Summary</h5>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() => setProfileSummary(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Your Profile Summary should mention the
                                  highlights of your career and education, what
                                  your professional interests are, and what kind
                                  of a career you are looking for. Write a
                                  meaningful summary of more than 50 characters.
                                </p>
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                        <label>Details of Project</label>
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="site-button"
                                  onClick={() => setProfileSummary(false)}
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
                    ) : null}

                    <div
                      id="accomplishments_bx"
                      className="job-bx bg-white m-b30"
                    >
                      <h5 className="m-b10">Accomplishments</h5>
                      <div className="list-row">
                        <div className="list-line">
                          {onlineProfileData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">Online Profile</h6>
                                <Link
                                  to={"#"}
                                  onClick={() => setOnlineProfile(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center  "
                                style={{ gap: "7px" }}
                              >
                                {onlineProfileData.map((item, index) => {
                                  return (
                                    <Link key={index} to={item.link}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                show={onlineprofile}
                                onHide={setOnlineProfile}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">
                                        Online Profiles
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setOnlineProfile(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Social Profile</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Social Profile Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        onClick={() => setOnlineProfile(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}

                          {workSampleData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">Work Sample</h6>
                                <Link
                                  to={"#"}
                                  onClick={() => setWorkSample(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex align-items-center flex-wrap"
                                style={{ gap: "7px" }}
                              >
                                {workSampleData.map((item, index) => {
                                  return (
                                    <Link key={index} to={item.link}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                show={worksample}
                                onHide={setWorkSample}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">
                                        Work Sample
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setWorkSample(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Work Title</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                              <label>Duration From</label>
                                              <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>2018</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                    <option>2013</option>
                                                    <option>2012</option>
                                                    <option>2011</option>
                                                    <option>2010</option>
                                                    <option>2009</option>
                                                    <option>2008</option>
                                                    <option>2007</option>
                                                    <option>2006</option>
                                                    <option>2005</option>
                                                    <option>2004</option>
                                                    <option>2003</option>
                                                    <option>2002</option>
                                                    <option>2001</option>
                                                  </Form.Control>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>january</option>
                                                    <option>february</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>Jun</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                  </Form.Control>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                              <label>Duration To</label>
                                              <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>2018</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                    <option>2013</option>
                                                    <option>2012</option>
                                                    <option>2011</option>
                                                    <option>2010</option>
                                                    <option>2009</option>
                                                    <option>2008</option>
                                                    <option>2007</option>
                                                    <option>2006</option>
                                                    <option>2005</option>
                                                    <option>2004</option>
                                                    <option>2003</option>
                                                    <option>2002</option>
                                                    <option>2001</option>
                                                  </Form.Control>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>january</option>
                                                    <option>february</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>Jun</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                  </Form.Control>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <div className="custom-control custom-checkbox">
                                                <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="check1"
                                                  name="example1"
                                                />
                                                <label
                                                  className="custom-control-label"
                                                  htmlFor="check1"
                                                >
                                                  I am currently working on this
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        onClick={() => setWorkSample(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}

                          {whitePaperData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">
                                  White Paper / Research Publication / Journal
                                  Entry
                                </h6>
                                <Link
                                  to={"#"}
                                  onClick={() => setWhitePaper(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {whitePaperData.map((item, index) => {
                                  return (
                                    <Link key={index} to={item.link}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                show={whitepaper}
                                onHide={setWhitePaper}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="JournalentryModalLongTitle"
                                      >
                                        White Paper / Research Publication /
                                        Journal Entry
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setWhitePaper(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Title</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Published On</label>
                                              <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>2018</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                    <option>2013</option>
                                                    <option>2012</option>
                                                    <option>2011</option>
                                                    <option>2010</option>
                                                    <option>2009</option>
                                                    <option>2008</option>
                                                    <option>2007</option>
                                                    <option>2006</option>
                                                    <option>2005</option>
                                                    <option>2004</option>
                                                    <option>2003</option>
                                                    <option>2002</option>
                                                    <option>2001</option>
                                                  </Form.Control>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>january</option>
                                                    <option>february</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>Jun</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                  </Form.Control>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        onClick={() => setWhitePaper(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}

                          {presentationData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">Presentation</h6>
                                <Link
                                  to={"#"}
                                  onClick={() => setPresentation(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex align-items-center flex-wrap"
                                style={{ gap: "7px" }}
                              >
                                {presentationData.map((item, index) => {
                                  return (
                                    <Link key={index} to={item.link}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                id="presentation"
                                show={presentation}
                                onHide={setPresentation}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="PresentationModalLongTitle"
                                      >
                                        Presentation
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setPresentation(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Title</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        data-dismiss="modal"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}

                          {patentData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">Patent</h6>
                                <Link
                                  to={"#"}
                                  data-toggle="modal"
                                  data-target="#patent"
                                  onClick={() => setPatent(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {patentData.map((item, index) => {
                                  return (
                                    <Link to={item.link} key={index}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                show={patent}
                                onHide={setPatent}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="PatentModalLongTitle"
                                      >
                                        Patent
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setPatent(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Title</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Patent Office</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Patent Office"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Status</label>
                                              <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                  <div className="custom-control custom-radio">
                                                    <input
                                                      type="radio"
                                                      className="custom-control-input"
                                                      id="check2"
                                                      name="example1"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="check2"
                                                    >
                                                      Patent Issued
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                  <div className="custom-control custom-radio">
                                                    <input
                                                      type="radio"
                                                      className="custom-control-input"
                                                      id="check3"
                                                      name="example1"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="check3"
                                                    >
                                                      Patent pending
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Application Number</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Application Number"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Published On</label>
                                              <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>2018</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                    <option>2013</option>
                                                    <option>2012</option>
                                                    <option>2011</option>
                                                    <option>2010</option>
                                                    <option>2009</option>
                                                    <option>2008</option>
                                                    <option>2007</option>
                                                    <option>2006</option>
                                                    <option>2005</option>
                                                    <option>2004</option>
                                                    <option>2003</option>
                                                    <option>2002</option>
                                                    <option>2001</option>
                                                  </Form.Control>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                  <Form.Control as="select">
                                                    <option>january</option>
                                                    <option>february</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>Jun</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                  </Form.Control>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        onClick={() => setPatent(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}

                          {certificationData ? (
                            <div className="list-line">
                              <div className="d-flex">
                                <h6 className="font-14 m-b5">Certification</h6>
                                <Link
                                  to={"#"}
                                  onClick={() => setCertification(true)}
                                  className="site-button add-btn button-sm"
                                >
                                  <i className="fa fa-pencil m-r5"></i> Edit
                                </Link>
                              </div>
                              <div
                                className="m-b0 d-flex  flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {certificationData.map((item, index) => {
                                  return (
                                    <Link to={item.link} key={index}>
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>

                              <Modal
                                className="modal fade modal-bx-info editor"
                                show={certification}
                                onHide={setCertification}
                              >
                                <div
                                  className="modal-dialog my-0"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="CertificationModalLongTitle"
                                      >
                                        Certification
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        onClick={() => setCertification(false)}
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form>
                                        <div className="row">
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Certification Name</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Certification Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Certification Body</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Certification Body"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                              <label>Year Onlabel</label>
                                              <Form.Control as="select">
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                              </Form.Control>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="site-button"
                                        onClick={() => setCertification(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="site-button"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div
                      id="desired_career_profile_bx"
                      className="job-bx bg-white m-b30"
                    >
                      <div className="d-flex">
                        <h5 className="m-b30">Desired Career Profile</h5>
                        <Link
                          to={"#"}
                          onClick={() => setCareerProfile(true)}
                          className="site-button add-btn button-sm"
                        >
                          <i className="fa fa-pencil m-r5"></i> Edit
                        </Link>
                      </div>
                      <Modal
                        className="modal fade modal-bx-info editor"
                        show={careerprofile}
                        onHide={setCareerProfile}
                      >
                        <div className="modal-dialog my-0" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="DesiredprofileModalLongTitle"
                              >
                                Desired Career Profile{" "}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                onClick={() => setCareerProfile(false)}
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Industry</label>
                                      <Form.Control as="select">
                                        <option>Accounting / Finance</option>
                                        <option>
                                          Banking / Financial Services / Broking
                                        </option>
                                        <option>
                                          Education / Teaching / Training
                                        </option>
                                        <option>
                                          IT-Hardware &amp; Networking
                                        </option>
                                        <option>Other</option>
                                      </Form.Control>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>
                                        Functional Area / Department
                                      </label>
                                      <Form.Control as="select">
                                        <option>Agent</option>
                                        <option>
                                          Architecture / Interior Design
                                        </option>
                                        <option>
                                          Beauty / Fitness / Spa Services
                                        </option>
                                        <option>
                                          IT Hardware / Technical Support
                                        </option>
                                        <option>
                                          IT Software - System Programming
                                        </option>
                                        <option>Other</option>
                                      </Form.Control>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Role</label>
                                      <Form.Control as="select">
                                        <option>Creative</option>
                                        <option>Web Designer</option>
                                        <option>Graphic Designer</option>
                                        <option>
                                          National Creative Director
                                        </option>
                                        <option>Fresher</option>
                                        <option>Other</option>
                                      </Form.Control>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Job Type</label>
                                      <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="permanent"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="permanent"
                                            >
                                              Permanent
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="contractual"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="contractual"
                                            >
                                              Contractual
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Employment Type</label>
                                      <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="fulltime"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="fulltime"
                                            >
                                              Full Time
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="parttime"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="parttime"
                                            >
                                              Part Time
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Preferred Shift</label>
                                      <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="day"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="day"
                                            >
                                              Day
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="night"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="night"
                                            >
                                              Night
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="flexible"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="flexible"
                                            >
                                              Part Time
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-6">
                                    <div className="form-group">
                                      <label>Availability to Join</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <Form.Control as="select">
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                          </Form.Control>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <Form.Control as="select">
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </Form.Control>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Expected Salary</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="usdollars"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="usdollars"
                                            >
                                              US Dollars
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="rupees"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="rupees"
                                            >
                                              Indian Rupees
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-6">
                                    <div className="form-group">
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <Form.Control as="select">
                                            <option>0 lakh</option>
                                            <option>1 lakh</option>
                                            <option>2 lakh</option>
                                            <option>5 lakh</option>
                                            <option>4 lakh</option>
                                            <option>5 lakh</option>
                                          </Form.Control>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <Form.Control as="select">
                                            <option> 05 Thousand </option>
                                            <option> 10 Thousand </option>
                                            <option> 15 Thousand </option>
                                            <option> 20 Thousand </option>
                                            <option> 25 Thousand </option>
                                            <option> 30 Thousand </option>
                                            <option> 35 Thousand </option>
                                            <option> 40 Thousand </option>
                                            <option> 45 Thousand </option>
                                            <option> 50 Thousand </option>
                                          </Form.Control>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Desired Location</label>
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
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Desired Industry</label>
                                      <Form.Control as="select">
                                        <option>Software</option>
                                        <option>Factory</option>
                                        <option>Ngo</option>
                                        <option>Other</option>
                                      </Form.Control>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                onClick={() => setCareerProfile(false)}
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

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          {desiredCareerProfile.industry ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Industry</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.industry}
                              </span>
                            </div>
                          ) : null}
                          {desiredCareerProfile.role ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Role</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.role}
                              </span>
                            </div>
                          ) : null}
                          {desiredCareerProfile.employmentType ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Employment Type</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.employmentType}
                              </span>
                            </div>
                          ) : null}

                          {desiredCareerProfile.availabilityToJoin ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">
                                Availability to Join
                              </label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.availabilityToJoin}
                              </span>
                            </div>
                          ) : null}

                          {desiredCareerProfile.desiredLocation ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Desired Location</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.desiredLocation}
                              </span>
                            </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          {desiredCareerProfile.functionalArea ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Functional Area</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.functionalArea}
                              </span>
                            </div>
                          ) : null}

                          {desiredCareerProfile.jobType ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Job Type</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.jobType}
                              </span>
                            </div>
                          ) : null}
                          {desiredCareerProfile.desiredShift ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Desired Shift</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.desiredShift}
                              </span>
                            </div>
                          ) : null}

                          {desiredCareerProfile.expectedSalary ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Expected Salary</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.expectedSalary}
                              </span>
                            </div>
                          ) : null}
                          {desiredCareerProfile.desiredIndustry ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Desired Industry</label>
                              <span className="clearfix font-13">
                                {desiredCareerProfile.desiredIndustry}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div
                      id="personal_details_bx"
                      className="job-bx bg-white m-b30"
                    >
                      <div className="d-flex">
                        <h5 className="m-b30">Personal Details</h5>
                        <Link
                          to={"#"}
                          onClick={() => setPersonalDetails(true)}
                          className="site-button add-btn button-sm"
                        >
                          <i className="fa fa-pencil m-r5"></i> Edit
                        </Link>
                      </div>

                      <Modal
                        className="modal fade modal-bx-info editor"
                        show={personaldetails}
                        onHide={setPersonalDetails}
                      >
                        <div className="modal-dialog my-0" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="PersonaldetailsModalLongTitle"
                              >
                                Personal Details
                              </h5>
                              <button
                                type="button"
                                className="close"
                                onClick={() => setPersonalDetails(false)}
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Date of Birth</label>
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                          </Form.Control>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <Form.Control as="select">
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </Form.Control>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                          <Form.Control as="select">
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                          </Form.Control>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Gender</label>
                                      <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="male"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="male"
                                            >
                                              Male
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                          <div className="custom-control custom-radio">
                                            <input
                                              type="radio"
                                              className="custom-control-input"
                                              id="female"
                                              name="example1"
                                            />
                                            <label
                                              className="custom-control-label"
                                              htmlFor="female"
                                            >
                                              Female
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Permanent Address</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your Permanent Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Hometown</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Hometown"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Pincode</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Pincode"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Marital Status</label>
                                      <select>
                                        <option>Married</option>
                                        <option>Single / Unmarried</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Passport Number</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Passport Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>What assistance do you need</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>
                                        Work Permit for Other Countries
                                      </label>
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
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                onClick={() => setPersonalDetails(false)}
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

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          {personalDetails.dateOfBirth ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Date of Birth</label>
                              <span className="clearfix font-13">
                                {personalDetails.dateOfBirth}
                              </span>
                            </div>
                          ) : null}
                          {personalDetails.gender ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Gender</label>
                              <span className="clearfix font-13">
                                {personalDetails.gender}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.maritalStatus ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Marital Status</label>
                              <span className="clearfix font-13">
                                {personalDetails.maritalStatus}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.passportNumber ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Passport Number</label>
                              <span className="clearfix font-13">
                                {personalDetails.passportNumber}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.differentlyAbled ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Differently Abled</label>
                              <span className="clearfix font-13">
                                {personalDetails.differentlyAbled}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.languages ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Languages</label>
                              <span className="clearfix font-13">
                                {personalDetails.languages}
                              </span>
                            </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          {personalDetails.addPermanentAddress ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Permanent Address</label>
                              <span className="clearfix font-13">
                                {personalDetails.addPermanentAddress}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.areaPinCode ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Area Pin Code</label>
                              <span className="clearfix font-13">
                                {personalDetails.areaPinCode}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.homeTown ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">Hometown</label>
                              <span className="clearfix font-13">
                                {personalDetails.homeTown}
                              </span>
                            </div>
                          ) : null}

                          {personalDetails.workPermitOfOtherCountry ? (
                            <div className="clearfix m-b20">
                              <label className="m-b0">
                                Work permit of other country
                              </label>
                              <span className="clearfix font-13">
                                {personalDetails.workPermitOfOtherCountry}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div
                      id="attach_resume_bx"
                      className="job-bx bg-white m-b30"
                    >
                      <h5 className="m-b10">Attach Resume</h5>
                      <p>
                        Resume is the most important document recruiters look
                        for. Recruiters generally do not look at profiles
                        without resumes.
                      </p>
                      <form className="attach-resume">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <div className="custom-file">
                                <p className="m-auto align-self-center">
                                  <i className="fa fa-upload"></i>
                                  Upload Resume File size is 3 MB
                                </p>
                                <input
                                  type="file"
                                  className="site-button form-control"
                                  id="customFile"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <p className="text-center">
                        If you do not have a resume document, you may write your
                        brief professional profile{" "}
                        <Link to={"#"} className="site-button-link">
                          here
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Jobmyresume;
