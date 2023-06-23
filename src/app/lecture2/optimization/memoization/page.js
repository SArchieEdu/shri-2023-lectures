"use client";

import { SlowComponent } from "@/components/SlowComponent/component";
import React, { useState } from "react";

export default function Memoization() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <MemoizedSlowComponent />
    </div>
  );
}

const MemoizedSlowComponent = React.memo(SlowComponent);
