import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  companyData: {
    companyName: "",
    summary: "",
    about: "",
    company_size_id: "",
    email: "",
    company_type_id: "",
    tagline: "",
    user_id: "",
    website_link: "",
    founded_date: "",
    phone: "",
    country_id: "",
    state_id: "",
    city_id: "",
    zip_code: "",
    address: "",
    facebook_link: "",
    twitter_link: "",
    google_link: "",
    linkedin_link: "",
  },
};

const companyDataSlice = createSlice({
  name: "companyDataSlice",
  initialState,
  reducers: {
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
  },
});

export const { setCompanyData } = companyDataSlice.actions;
export default companyDataSlice.reducer;
