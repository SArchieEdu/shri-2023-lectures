"use client";

import {
  SlowComponentWithHook,
  useIsAuthorized,
} from "@/components/SlowComponentWithHook/component";

export default function ConditionalRendering() {
  const isAuthorized = useIsAuthorized();
  return <div>{isAuthorized && <SlowComponentWithHook />}</div>;
}
