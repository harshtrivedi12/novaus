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
import {
  setCertificationData,
  setCertificationValue,
  setDesiredCareerProfile,
  setEducationData,
  setEmploymentData,
  setItSkillsData,
  setOnlineProfileData,
  setOnlineProfileValue,
  setPatentData,
  setPatentValue,
  setPersonalDetailsValue,
  setPresentationData,
  setPresentationValue,
  setProfileSummaryValue,
  setProjectsData,
  setResumeData,
  setResumeHeadline,
  setSkillsData,
  setSkillsValue,
  setWhitePaperData,
  setWhitePaperValue,
  setWorkSampleData,
  setWorkSampleValue,
} from "../../store/reducers/jobsMyResumeSlice";
import { useEffect } from "react";
import JobPageSkeleton from "../skeleton/jobPage";
import FixedHeader from "../Layout/fixedHeader";
import { FaEdit } from "react-icons/fa";
import SkillsComponent from "../jobMyResumeComponents/skills";
import EmploymentComponent from "../jobMyResumeComponents/employment";
import EducationComponent from "../jobMyResumeComponents/education";
import ITSkillsComponent from "../jobMyResumeComponents/itSkills";
import ProjectsComponent from "../jobMyResumeComponents/projects";
import DesiredCareerComponent from "../jobMyResumeComponents/desiredCareer";
import PersonalDetailsComponent from "../jobMyResumeComponents/personalDetails";

var bnr = require("./../../images/banner/bnr1.jpg");
//var bnr2 = require('./../../images/background/bg3.jpg');

function Jobmyresume() {
  const [showSkeleton, setShowSkeleton] = useState(true);
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
  const onlineProfileValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments
        .onlineProfileValue
  );

  const onlineProfileData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.onlineProfileData
  );
  const workSampleValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.workSampleValue
  );
  const workSampleData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.workSampleData
  );
  const whitePaperValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.whitePaperValue
  );
  const whitePaperData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.whitePaperData
  );
  const presentationValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.presentationValue
  );
  const presentationData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.presentationData
  );
  const patentValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.patentValue
  );
  const patentData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.patentData
  );
  const certificationValue = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments
        .certificationValue
  );
  const certificationData = useSelector(
    (state) =>
      state.jobsMyResumeSlice.jobsMyResumeData.accomplishments.certificationData
  );
  const skillsValue = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData.skillsValue
  );
  const token = localStorage.getItem("jobSeekerLoginToken");
  const dispatch = useDispatch();

  const jobsMyResumeData = useSelector(
    (state) => state.jobsMyResumeSlice.jobsMyResumeData
  );

  // axios req

  const getResumeData = async () => {
    axios({
      url: "https://jobsbooklet.in/api/jobseeker/user-profile",
      method: "Get",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // dispatch(setResumeData(res.data.data.ai_resume_parse_data));
      // console.log(res.data.data.ai_resume_parse_data, "axios req");
      let data = res.data.data.ai_resume_parse_data;
      dispatch(setResumeHeadline(data.resumeHeadline));
      dispatch(setSkillsData(data.skillsData));
      dispatch(setEmploymentData(data.employmentData));
      dispatch(setEducationData(data.educationData));
      dispatch(setItSkillsData(data.itSkillsData));
      dispatch(setProjectsData(data.projectsData));
      dispatch(setProfileSummaryValue(data.profileSummaryValue));
      dispatch(setOnlineProfileData(data.accomplishments.onlineProfileData));
      dispatch(setWorkSampleData(data.accomplishments.workSampleData));
      dispatch(setWhitePaperData(data.accomplishments.whitePaperData));
      dispatch(setPatentData(data.accomplishments.patentData));
      dispatch(setPresentationData(data.accomplishments.presentationData));
      dispatch(setCertificationData(data.accomplishments.certificationData));
      dispatch(setDesiredCareerProfile(data.desiredCareerProfile));
      dispatch(setPersonalDetailsValue(data.personalDetails));
      setShowSkeleton(false);
    });
  };
  useEffect(() => {
    getResumeData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setResumeData({ ...jobsMyResumeData, [name]: value }));
  };
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

  // handleChanges for accomplishments
  const handleOnlineProfileChange = (e) => {
    const { name, value } = e.target;
    dispatch(setOnlineProfileValue({ ...onlineProfileValue, [name]: value }));
  };
  const handleWorkSampleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setWorkSampleValue({ ...workSampleValue, [name]: value }));
  };
  const handleWhitePaperChange = (e) => {
    const { name, value } = e.target;
    dispatch(setWhitePaperValue({ ...whitePaperValue, [name]: value }));
  };
  const handlePresentationChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPresentationValue({ ...presentation, [name]: value }));
  };
  const handlePatentChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPatentValue({ ...patentValue, [name]: value }));
  };
  const handleCertificationChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCertificationValue({ ...certificationValue, [name]: value }));
  };

  // online profile

  const [editOnlineIndex, setEditOnlineIndex] = useState(-1);

  const updateOnlineItem = () => {
    if (editOnlineIndex === -1) return;

    const updatedFormData = [...onlineProfileData];
    updatedFormData[editOnlineIndex] = {
      ...updatedFormData[editOnlineIndex],
      ...onlineProfileValue,
    };
    dispatch(setOnlineProfileData(updatedFormData));
    setOnlineProfile(false);
    setEditOnlineIndex(-1);
  };

  const editOnlineItem = (index) => {
    const item = onlineProfileData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setOnlineProfileValue(editData));
    setEditOnlineIndex(index);
    setOnlineProfile(true);
  };
  // online profile update and edit logic ends here

  // workSample logic

  const [editWorkIndex, setEditWorkIndex] = useState(-1);

  const updateWorkItem = () => {
    if (editWorkIndex === -1) return;

    const updatedFormData = [...workSampleData];
    updatedFormData[editWorkIndex] = {
      ...updatedFormData[editWorkIndex],
      ...workSampleValue,
    };
    dispatch(setWorkSampleData(updatedFormData));
    setWorkSample(false);
    setEditWorkIndex(-1);
  };

  const editWorkItem = (index) => {
    const item = workSampleData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setWorkSampleValue(editData));
    setEditWorkIndex(index);
    setWorkSample(true);
  };
  // workSample Logic Ends here

  // whitePaper edit update Logic Starts

  const [editWhitePaperIndex, setEditWhitePaperIndex] = useState(-1);

  const updateWhitePaperItem = () => {
    if (editWhitePaperIndex === -1) return;

    const updatedFormData = [...whitePaperData];
    updatedFormData[editWhitePaperIndex] = {
      ...updatedFormData[editWhitePaperIndex],
      ...whitePaperValue,
    };
    dispatch(setWhitePaperData(updatedFormData));
    setWhitePaper(false);
    setEditWhitePaperIndex(-1);
  };

  const editWhitePaperItem = (index) => {
    const item = whitePaperData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setWhitePaperValue(editData));
    setEditWhitePaperIndex(index);
    setWhitePaper(true);
  };

  // whitePaper edit update Logic ends

  // presentation edit update logic starts

  const [editPresentationIndex, setEditPresentationIndex] = useState(-1);

  const updatePresentationItem = () => {
    if (editPresentationIndex === -1) return;

    const updatedFormData = [...presentationData];
    updatedFormData[editPresentationIndex] = {
      ...updatedFormData[editPresentationIndex],
      ...presentationValue,
    };
    dispatch(setPresentationData(updatedFormData));
    setPresentation(false);
    setEditPresentationIndex(-1);
  };

  const editPresentationItem = (index) => {
    const item = presentationData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setPresentationValue(editData));
    setEditPresentationIndex(index);
    setPresentation(true);
  };

  // presentation edit update logic ends

  // patent Edit update logic starts

  const [editPatentIndex, setEditPatentIndex] = useState(-1);

  const updatePatentItem = () => {
    if (editPatentIndex === -1) return;

    const updatedFormData = [...patentData];
    updatedFormData[editPatentIndex] = {
      ...updatedFormData[editPatentIndex],
      ...patentValue,
    };
    dispatch(setPatentData(updatedFormData));
    setPatent(false);
    setEditPatentIndex(-1);
  };

  const editPatentItem = (index) => {
    const item = patentData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setPatentValue(editData));
    setEditPatentIndex(index);
    setPatent(true);
  };

  // patent edit update logic ends

  // certification edit update logic starts
  const [editCertificationIndex, setEditCertificationIndex] = useState(-1);

  const updateCertificationItem = () => {
    if (editCertificationIndex === -1) return;

    const updatedFormData = [...certificationData];
    updatedFormData[editCertificationIndex] = {
      ...updatedFormData[editCertificationIndex],
      ...certificationValue,
    };
    dispatch(setCertificationData(updatedFormData));
    setCertification(false);
    setEditCertificationIndex(-1);
  };

  const editCertificationItem = (index) => {
    const item = certificationData[index];
    const editData = {
      label: item.label,
      link: item.link,
    };
    dispatch(setCertificationValue(editData));
    setEditCertificationIndex(index);
    setCertification(true);
  };

  // certification edit update logic ends
  return (
    <>
      <Header />
      <div className="page-content">
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
                                        <label htmlFor="resumeHeadline">
                                          Resume Headline
                                        </label>
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                          name="resumeHeadline"
                                          id="resumeHeadline"
                                          value={resumeHeadline}
                                          onChange={handleChange}
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
                        <SkillsComponent />
                      </div>
                    ) : null}

                    {employmentData ? (
                      <div
                        id="employment_bx"
                        className="job-bx bg-white m-b30 "
                      >
                        <EmploymentComponent />
                      </div>
                    ) : null}

                    {educationData ? (
                      <div id="education_bx" className="job-bx bg-white m-b30">
                        <EducationComponent />
                        {/* <Link to={"#"} className="clearfix">
                          Add Doctorate/PhD
                        </Link>
                        <Link to={"#"} className="clearfix">
                          Add Masters/Post-Graduation
                        </Link>
                        <Link to={"#"} className="clearfix">
                          Add Graduation/Diploma
                        </Link> */}
                      </div>
                    ) : null}

                    {itSkillsData ? (
                      <div
                        id="it_skills_bx"
                        className="job-bx table-job-bx bg-white m-b30"
                      >
                        <ITSkillsComponent />
                      </div>
                    ) : null}

                    {projectsData ? (
                      <div id="projects_bx" className="job-bx bg-white m-b30">
                        <ProjectsComponent />
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
                                        <label htmlFor="profileSummaryValue">
                                          Details of Project
                                        </label>
                                        <textarea
                                          className="form-control"
                                          placeholder="Type Description"
                                          id="profileSummaryValue"
                                          name="profileSummaryValue"
                                          onChange={handleChange}
                                          value={
                                            jobsMyResumeData.profileSummaryValue
                                          }
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
                                <button
                                  onClick={() => setProfileSummary(false)}
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
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center  "
                                style={{ gap: "7px" }}
                              >
                                {onlineProfileData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editOnlineItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Social Profile
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Social Profile Name"
                                                name="label"
                                                id="label"
                                                onChange={
                                                  handleOnlineProfileChange
                                                }
                                                value={onlineProfileValue.label}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">URL</label>
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="www.google.com"
                                                id="link"
                                                name="link"
                                                onChange={
                                                  handleOnlineProfileChange
                                                }
                                                value={onlineProfileValue.link}
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div> */}
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
                                        onClick={updateOnlineItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                              </div>
                              <div
                                className="m-b0 d-flex align-items-center flex-wrap"
                                style={{ gap: "7px" }}
                              >
                                {workSampleData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editWorkItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Work Title
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="label"
                                                name="label"
                                                onChange={
                                                  handleWorkSampleChange
                                                }
                                                value={workSampleValue.label}
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">URL</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="link"
                                                id="link"
                                                onChange={
                                                  handleWorkSampleChange
                                                }
                                                value={workSampleValue.link}
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-6 col-md-6">
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
                                          </div> */}
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
                                        onClick={updateWorkItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {whitePaperData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editWhitePaperItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Title
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="label"
                                                name="label"
                                                onChange={
                                                  handleWhitePaperChange
                                                }
                                                value={whitePaperValue.label}
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">URL</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="link"
                                                name="link"
                                                onChange={
                                                  handleWhitePaperChange
                                                }
                                                value={whitePaperValue.link}
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-12 col-md-12">
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
                                          </div> */}
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
                                        onClick={updateWhitePaperItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                              </div>
                              <div
                                className="m-b0 d-flex align-items-center flex-wrap"
                                style={{ gap: "7px" }}
                              >
                                {presentationData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editPresentationItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Title
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="label"
                                                name="label"
                                                onChange={
                                                  handlePresentationChange
                                                }
                                                value={presentationValue.label}
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">URL</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="link"
                                                name="link"
                                                onChange={
                                                  handlePresentationChange
                                                }
                                                value={presentationValue.link}
                                                placeholder="www.google.com"
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label>Description</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Type Description"
                                              ></textarea>
                                            </div>
                                          </div> */}
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
                                        onClick={updatePresentationItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                              </div>
                              <div
                                className="m-b0 d-flex flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {patentData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editPatentItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Title
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="label"
                                                name="label"
                                                onChange={handlePatentChange}
                                                value={patentValue.label}
                                                placeholder="Enter Title"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">URL</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="link"
                                                name="link"
                                                placeholder="www.google.com"
                                                onChange={handlePatentChange}
                                                value={patentValue.link}
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-12 col-md-12">
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
                                          </div> */}
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
                                        onClick={updatePatentItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                              </div>
                              <div
                                className="m-b0 d-flex  flex-wrap align-items-center "
                                style={{ gap: "7px" }}
                              >
                                {certificationData.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="d-flex flex-wrap  align-items-center "
                                      style={{ gap: "20px" }}
                                    >
                                      <Link to={item.link}>{item.label}</Link>
                                      <button
                                        style={{ cursor: "pointer" }}
                                        className="border-0"
                                        onClick={() => {
                                          editCertificationItem(index);
                                        }}
                                      >
                                        <FaEdit />
                                      </button>
                                    </div>
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
                                              <label htmlFor="label">
                                                Certification Name
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="label"
                                                id="label"
                                                onChange={
                                                  handleCertificationChange
                                                }
                                                value={certificationValue.label}
                                                placeholder="Enter Certification Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                              <label htmlFor="link">
                                                Certification Body
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="link"
                                                name="link"
                                                onChange={
                                                  handleCertificationChange
                                                }
                                                value={certificationValue.link}
                                                placeholder="Enter Certification Body"
                                              />
                                            </div>
                                          </div>
                                          {/* <div className="col-lg-6 col-md-6">
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
                                          </div> */}
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
                                        onClick={updateCertificationItem}
                                        type="button"
                                        className="site-button"
                                      >
                                        Update
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
                      <DesiredCareerComponent />
                    </div>
                    <div
                      id="personal_details_bx"
                      className="job-bx bg-white m-b30"
                    >
                      <PersonalDetailsComponent />
                    </div>

                    {/* <div
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
                    </div> */}
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
