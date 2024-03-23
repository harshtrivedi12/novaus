import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyInfo = createAsyncThunk(
  "message/fetchUserChats",
  async () => {
    axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return rejectWithValue(error.toString());
      });
  }
);
