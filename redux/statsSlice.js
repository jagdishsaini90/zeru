import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: 12750,
  transactions: 40120,
  chains: 110,
  zkScores: 8654,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStats: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetStats: () => initialState,
  },
});

export const { setStats, setLoading, resetStats } = statsSlice.actions;
export default statsSlice.reducer;
