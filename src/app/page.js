"use client";

import React from "react";

import { Provider } from "react-redux";
import store from "../../redux/store";
import GlobalStats from "./_globalStats";

export default function Home() {
  return (
    <Provider store={store}>
      <GlobalStats />
    </Provider>
  );
}
