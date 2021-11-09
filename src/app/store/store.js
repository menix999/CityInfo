import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../../features/citySlice";
import singleTileCityReducer from "../../features/singleTileDisplaySlice";
import weatherApiReducer from "../../features/weatherSlice";

export const store = configureStore({
  reducer: {
    cities: cityReducer,
    individualCity: singleTileCityReducer,
    weatherApi: weatherApiReducer,
  },
});
