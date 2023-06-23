"use client";

import dynamic from "next/dynamic";
import { Suspense, lazy, useState } from "react";

const DynamicSlowComponent = dynamic(
  () =>
    import("@/components/SlowComponent/component").then(
      (mod) => mod.SlowComponent
    ),
  { ssr: false, loading: () => <span>Loading...</span> }
);

export default function Lazy() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>switch</button>
      {isVisible && <DynamicSlowComponent />}
    </div>
  );
}
