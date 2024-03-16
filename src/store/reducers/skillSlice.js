// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   skillInput: "",
//   skillsValues: {
//     skills: "",
//   },
//   skillsData: [],
// };

// const skillSlice = createSlice({
//   name: "skills",
//   initialState,
//   reducers: {
//     setSkillsValues: (state, action) => {
//       state.skillsValues = action.payload;
//     },
//     setSkillsData: (state, action) => {
//       state.skillsData = action.payload;
//     },
//     deleteSkill: (state, action) => {
//       state.skillsData = state.skillsData.filter(
//         (_, index) => index !== action.payload
//       );
//     },
//     addItem: (state, action) => {
//       state.skillsData.push(action.payload);
//     },
//     editItem: (state, action) => {
//       const { index, newValue } = action.payload;
//       state.skillsData[index] = newValue;
//     },
//     setSkillInput: (state, action) => {
//       state.skillInput = action.payload;
//     },
//   },
// });

// export const {
//   setSkillsValues,
//   setSkillsData,
//   deleteSkill,
//   addItem,
//   editItem,

//   setSkillInput,
// } = skillSlice.actions;

// export default skillSlice.reducer;
