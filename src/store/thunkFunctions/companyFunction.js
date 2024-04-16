import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem("employeeLoginToken");

export const fetchCompanyInfo = createAsyncThunk(
  "company/fetchCompanyInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://jobsbooklet.in/api/employeer/employeer-profile",
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data.data, "fulfilled");
      return response.data.data; // This is the resolved value used as action.payload
    } catch (error) {
      // Using rejectWithValue to return a custom error payload
      return rejectWithValue(error.toString());
    }
  }
);
