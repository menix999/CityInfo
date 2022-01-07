import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, endpoint } from "../api/api";

export const fetchData = createAsyncThunk("cities/fetchData", async () => {
  try {
    const { data } = await apiUrl.get(`${endpoint.cities}`);
    return data;
  } catch (err) {
    console.log(err);
  }
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
