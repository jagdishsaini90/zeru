import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assetsList: [
    ...Array.from({ length: 70 }, (_, i) => {
      const assets = [
        { icon: "/usdc.webp", name: "USDC" },
        { icon: "/usdt.webp", name: "USDT" },
        { icon: "/eth.webp", name: "ETH" },
        { icon: "/base.webp", name: "BASE" },
        { icon: "/arb.webp", name: "ARB" },
      ];
      const asset = assets[i % assets.length];

      return {
        icon: asset.icon,
        name: `${asset.name} ${i + 1}`,
        borrow: `$${(Math.random() * 20 + 1).toFixed(2)}B`,
        collateral: `${(Math.random() * 500 + 10).toFixed(0)}M`,
        total: `${(Math.random() * 2 + 0.1).toFixed(2)}B`,
      };
    }),
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
