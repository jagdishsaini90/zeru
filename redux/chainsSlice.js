import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chainList: [
    {
      icon: "/eth.webp",
      name: "ETHEREUM",
      borrow: "$20B",
      collateral: "100M",
      total: "1B",
    },
    {
      icon: "/base.webp",
      name: "BASE",
      borrow: "$16B",
      collateral: "150M",
      total: "1.5B",
    },
    {
      icon: "/bera.webp",
      name: "BERA",
      borrow: "$12B",
      collateral: "200M",
      total: "2B",
    },
    {
      icon: "/polygon.webp",
      name: "POLYGON",
      borrow: "$10B",
      collateral: "10M",
      total: "100M",
    },
    {
      icon: "/arbitrum.webp",
      name: "ARB",
      borrow: "$8B",
      collateral: "50M",
      total: "500M",
    },
  ],
};

const chainsSlice = createSlice({
  name: "chains",
  initialState,
  reducers: {
    setChains: (state, action) => {
      state.chainList = action.payload;
    },
    resetChains: () => initialState,
  },
});

export const { setChains, setCurrentChain, resetChains } = chainsSlice.actions;
export default chainsSlice.reducer;
