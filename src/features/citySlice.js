import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, endpoint } from "../api/api";

export const fetchData = createAsyncThunk("cities/fetchData", async () => {
  const response = await apiUrl.get(`${endpoint.cities}`);
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
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const citySingleName = (state) => state.cities.cityInformation;

export default citySlice.reducer;
