"use client";

import { SlowComponent } from "@/components/SlowComponent/component";
import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  );
};

export default function StateLocation() {
  return (
    <div>
      <CountComponent />
      <SlowComponent />
    </div>
  );
}
