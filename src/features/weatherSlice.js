import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherData = createAsyncThunk("", async (city) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bde994ad95f9054cedb19e7637e49d8`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const weatherApiSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {},
  extraReducers: {
    [weatherData.pending]: (state) => {
      state.status = "loading";
    },
    [weatherData.fulfilled]: (state, action) => {
      state.status = "success";
      state.weather = action.payload;
    },
    [weatherData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const weatherDetailApi = (state) => state.weatherApi;

export default weatherApiSlice.reducer;
