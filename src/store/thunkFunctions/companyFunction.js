import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyInfo = createAsyncThunk(
  "company/fetchCompanyInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://93.188.167.106:3002/api/employeer/company/1",
        headers: {
          Authorization: `Bearer `,
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
