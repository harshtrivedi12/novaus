import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobApplicationData: {},
};

const jobApplicationSlice = createSlice({
  name: "jobApplicationSlice",
  initialState,
  reducers: {
    setJobApplicationData: (state, action) => {
      state.jobApplicationData = action.payload;
    },
  },
});

export const { setJobApplicationData } = jobApplicationSlice.actions;
export default jobApplicationSlice.reducer;
