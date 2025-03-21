import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loan: [
    { range: "0-200", amount: 100 },
    { range: "200-400", amount: 135 },
    { range: "400-600", amount: 695 },
    { range: "600-800", amount: 1000 },
    { range: "800-1000", amount: 990 },
  ],
  liquidations: [
    { range: "0-200", amount: 990 },
    { range: "200-400", amount: 1000 },
    { range: "400-600", amount: 695 },
    { range: "600-800", amount: 135 },
    { range: "800-1000", amount: 100 },
  ],
  overview: [
    { range: "0-200", amount: 400 },
    { range: "200-400", amount: 1000 },
    { range: "400-600", amount: 695 },
    { range: "600-800", amount: 135 },
    { range: "800-1000", amount: 100 },
  ],
};

const statsChartSlice = createSlice({
  name: "statsChart",
  initialState,
  reducers: {
    setStats: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetStats: () => initialState,
  },
});

export const { setStats, setLoading, resetStats } = statsChartSlice.actions;
export default statsChartSlice.reducer;
