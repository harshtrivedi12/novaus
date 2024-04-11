import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  skillsValues: "",
  skillsData: ["skill2", "skill2", "skill3"],
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
  screeningQuestion: {},
  setSelectedScreeningQuestion: [],
  postAJobData: {
    jobTitle: "",
    company: "",
    workplaceType: "",
    location: "",
    jobType: "",
    description: "fdffd",
    education: "",
    qualificationSetting: "",
    selectedCity: "",
    selectedState: "",
    selectedCountry: "",
  },
};

const postAJobSlice = createSlice({
  name: "postAJobSlice",
  initialState,
  reducers: {
    setPostAJobData: (state, action) => {
      console.log(action.payload);
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
    setScreeningQuestion: (state, action) => {
      state.screeningQuestion = action.payload;
    },
    setSelctedScreeningQuestion: (state, action) => {
      const { index } = action.payload;
      console.log(state.screeningQuestion[index]);
      state.setSelectedScreeningQuestion.push(state.screeningQuestion[index]);
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
  setScreeningQuestion,
  setSelctedScreeningQuestion,
} = postAJobSlice.actions;

export default postAJobSlice.reducer;
