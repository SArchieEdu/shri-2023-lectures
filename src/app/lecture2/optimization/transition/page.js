"use client";

import { SlowComponent } from "@/components/SlowComponent/component";
import { useState, useTransition } from "react";

export default function Transition() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <button onClick={() => startTransition(() => setIsVisible(!isVisible))}>
        {isVisible ? "hide" : "show"}
      </button>
      {isPending && <span>Ждём...</span>}
      {isVisible && <SlowComponent />}
    </div>
  );
}
