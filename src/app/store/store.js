import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../../features/citySlice";
import singleTileCityReducer from "../../features/singleTileDisplaySlice";

export const store = configureStore({
  reducer: {
    cities: cityReducer,
    individualCity: singleTileCityReducer,
  },
});
