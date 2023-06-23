"use client";

import React from "react";

export function SlowComponent() {
  return (
    <ul className="items">
      {new Array(1000).fill(null).map((_, i) => (
        <Item key={i} index={i} />
      ))}
    </ul>
  );
}

function Item({ index }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 2) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Item #{index + 1}</li>;
}

export default SlowComponent;
