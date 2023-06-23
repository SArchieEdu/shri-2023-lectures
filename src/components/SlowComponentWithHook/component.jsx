"use client";

import React from "react";

export const useIsAuthorized = () => {
  return false;
};

const useVerySlowHook = () => {
  let startTime = performance.now();
  while (performance.now() - startTime < 10000) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
};

export function SlowComponentWithHook() {
  useVerySlowHook();

  return <div>VerySlow</div>;
}
