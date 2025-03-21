import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./statsSlice";
import statsChartReducer from "./statsChartSlice";
import assetsReducer from "./assetsSlice";
import chainsReducer from "./chainsSlice";

const store = configureStore({
  reducer: {
    stats: statsReducer,
    statsCharts: statsChartReducer,
    assets: assetsReducer,
    chains: chainsReducer,
  },
});

export default store;
