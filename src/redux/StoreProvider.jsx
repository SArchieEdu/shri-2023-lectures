"use client";

import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
