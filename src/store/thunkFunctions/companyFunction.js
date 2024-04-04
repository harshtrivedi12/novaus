import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyInfo = createAsyncThunk(
  "company/fetchCompanyInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://jobsbooklet.in/api/employeer/company/1",
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b21AZ21haWwuY29tIiwiZXhwIjoxNzExNTQ5MjgwfQ._Kh75DvFoVSs8ReceAFMoKWl7pumhOKGZff8ClunUVU`,
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
