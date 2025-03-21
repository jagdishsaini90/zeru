import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assetsList: [
    {
      icon: "/usdc.webp",
      name: "USDC",
      borrow: "$20B",
      collateral: "100M",
      total: "1B",
    },
    {
      icon: "/usdt.webp",
      name: "USDT",
      borrow: "$16B",
      collateral: "150M",
      total: "1.5B",
    },
    {
      icon: "/eth.webp",
      name: "ETH",
      borrow: "$12B",
      collateral: "200M",
      total: "2B",
    },
    {
      icon: "/base.webp",
      name: "BASE",
      borrow: "$10B",
      collateral: "10M",
      total: "100M",
    },
    {
      icon: "/arb.webp",
      name: "ARB",
      borrow: "$8B",
      collateral: "50M",
      total: "500M",
    },
  ],
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAssets: (state, action) => {
      state.assetsList = action.payload;
    },
    clearAssets: () => initialState,
  },
});

export const { setAssets, selectAsset, clearAssets } = assetsSlice.actions;
export default assetsSlice.reducer;
