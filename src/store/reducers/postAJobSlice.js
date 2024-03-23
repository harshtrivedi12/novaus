import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  skillsValues: "",
  skillsData: ["skill1", "skill2", "skill3"],
  employmentData: {
    currentJobTitle: "",
    previousEmployers: "",
    previousJobRole: "",
  },
  references: {
    contactInformation: "",
    primaryReference: "",
  },
  personalInformation: {
    dateOfBirth: "",
  },
  postAJobData: {
    jobTitle: "",
    company: "",
    workplaceType: "",
    location: "",
    jobType: "",
    description: "",
    education: "",
    qualificationSetting: "",
  },
};

const postAJobSlice = createSlice({
  name: "postAJobSlice",
  initialState,
  reducers: {
    setPostAJobData: (state, action) => {
      state.postAJobData = action.payload;
    },
    setSkillsValues: (state, action) => {
      state.skillsValues = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    setEmploymentData: (state, action) => {
      state.employmentData = action.payload;
    },
    setReferences: (state, action) => {
      state.references = action.payload;
    },
    setPersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
  },
});

export const {
  setPostAJobData,
  setSkillsValues,
  setSkillsData,
  setEmploymentData,
  setReferences,
  setPersonalInformation,
} = postAJobSlice.actions;

export default postAJobSlice.reducer;
