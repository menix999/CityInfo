import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, endpoint } from "../api/api";

export const fetchSingleData = createAsyncThunk(
  "cities/fetchData",
  async (id) => {
    const response = await apiUrl.get(`${endpoint.cities}${id}`);
    return response.data;
  }
);

export const singleTileDisplaySLice = createSlice({
  name: "individualCity",
  initialState: {
    individualCityInformation: [],
    status: null,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchSingleData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSingleData.fulfilled]: (state, action) => {
      state.status = "success";
      state.individualCityInformation = action.payload;
    },
    [fetchSingleData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const cityDetailInformation = (state) =>
  state.individualCity.individualCityInformation;

export default singleTileDisplaySLice.reducer;
