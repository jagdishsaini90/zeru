import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chainList: [
    ...Array.from({ length: 70 }, (_, i) => {
      const assets = [
        { icon: "/eth.webp", name: "ETHEREUM" },
        { icon: "/base.webp", name: "BASE" },
        { icon: "/bera.webp", name: "BERA" },
        { icon: "/polygon.webp", name: "POLYGON" },
        { icon: "/arbitrum.webp", name: "ARBITRUM" },
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
