import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobsMyResumeData: {
    resumeHeadline: "Job board currently living in USA",
    skillsData: ["javascript", "css", "html", "bootstrap"],
    employmentData: [
      {
        jobTitle: "Junior Software Developer",
        company: "W3ITEXPERTS",
        jobStartDate: "10-2015",
        jobEndDate: "Present",
        jobDescription: "Junior Software Developer",
      },
    ],
    educationData: [
      {
        education: "Doctorate/PHD",
        course: "Select Course",
        passOut: "2015",
        university: "Select University",
      },
    ],
    itSkillsData: [
      {
        skills: "Bootstrap",
        version: "1",
        lastUsed: "2018",
        experience: "1 Year 5 Months",
      },
    ],
    projectsData: [
      {
        projectTitle: "Project Title",
        clientName: "Enter Client Name",
        projectStatus: "IN PROGRESS",
        workStartedFromYear: "2018",
        workStartedFromMonth: "January",
        workedTillYear: "2019",
        workedTillMonth: "January",
        projectDescription: "Hey this is the project Description",
      },
    ],
    profileSummaryValue:
      "Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.dsa",
    accomplishments: {
      onlineProfileData: [
        { label: "facebook", link: "https://facebook.com" },
        { label: "facebook", link: "https://facebook.com" },
      ],
      workSampleData: [{ label: "project", link: "#" }],
      whitePaperData: [{ label: "online publications", link: "#" }],
      presentationData: [{ label: "online presentations", link: "#" }],
      patentData: [{ label: "patents", link: "#" }],
      certificationData: ["html", "css", "js"],
    },
    desiredCareerProfile: {
      industry: "It Software services",
      role: "Web Designer",
      employmentType: "Full Time",
      availabilityToJoin: "12 July",
      desiredLocation: "Add Desired Location",
      functionalArea: "design / creative / userExperience",
      jobType: "permanent",
      desiredShift: "add Desired Shift",
      expectedSalary: "1 Lakhs",
      desiredIndustry: "add desired Industry",
    },

    personalDetails: {
      dateOfBirth: "31 July 0998",
      gender: "male",
      maritalStatus: "unmarried",
      passportNumber: "+1234567890",
      differentlyAbled: "None",
      languages: "English",
      addPermanentAddress: "Add Permanent Address",
      areaPinCode: "302010",
      homeTown: "Delhi",
      workPermitOfOtherCountry: "USA",
    },

    attachResumeValue: "",
  },
};

const jobsMyResumeSlice = createSlice({
  name: "jobsMyResumeSlice",
  initialState,
  reducers: {
    setResumeData: (state, action) => {
      state.jobsMyResumeData = action.payload;
    },
    setResumeHeadline: (state, action) => {
      state.resumeHeadling = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    setEmploymentData: (state, action) => {
      state.employmentData = action.payload;
    },
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    setItSkillsData: (state, action) => {
      state.itSkillsData = action.payload;
    },
    setProjectsData: (state, action) => {
      state.projectsData = action.payload;
    },
    setProfileSummary: (state, action) => {
      state.profileSummary = action.payload;
    },
    setAccomplishments: (state, action) => {
      state.accomplishments = action.payload;
    },
    setDesiredCareerProfile: (state, action) => {
      state.desiredCareerProfile = action.payload;
    },
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setAttachResumeValue: (state, action) => {
      state.attachResumeValue = action.payload;
    },
  },
});

export const {
  setResumeHeadline,
  setSkillsData,
  setEmploymentData,
  setEducationData,
  setItSkillsData,
  setProjectsData,
  setProfileSummary,
  setAccomplishments,
  setDesiredCareerProfile,
  setPersonalDetails,
  setAttachResumeValue,
  setResumeData,
} = jobsMyResumeSlice.actions;

export default jobsMyResumeSlice.reducer;
