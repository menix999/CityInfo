import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("cities/fetchData", async () => {
  const response = await axios.get(
    `https://616dfd65a83a850017caa7c1.mockapi.io/cities`
  );
  console.log(response);
  return response.data;
});

export const citySlice = createSlice({
  name: "city",
  initialState: {
    cityInformation: [],
    status: null,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "success";
      state.cityInformation = action.payload;
      console.log(action.payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const citySingleName = (state) => state.cities.cityName;

export default citySlice.reducer;
