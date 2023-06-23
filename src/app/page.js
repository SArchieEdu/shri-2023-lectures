"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Patterns</h2>
      <ul>
        <li>
          <Link href="/lecture2/patterns/compound-component">
            Compound Components
          </Link>
        </li>
        <li>
          <Link href="/lecture2/patterns/render-prop">Render prop</Link>
        </li>
        <li>
          <Link href="/lecture2/patterns/hoc">Hoc</Link>
        </li>
      </ul>
      <h2>Optimization</h2>
      <ul>
        <li>
          <Link href="/lecture2/optimization/state-location">
            State location
          </Link>
        </li>
        <li>
          <Link href="/lecture2/optimization/conditional-rendering">
            Conditional rendering
          </Link>
        </li>
        <li>
          <Link href="/lecture2/optimization/memoization">Memoization</Link>
        </li>
        <li>
          <Link href="/lecture2/optimization/transition">Transition</Link>
        </li>
        <li>
          <Link href="/lecture2/optimization/lazy">Lazy</Link>
        </li>
        <li>
          <Link href="/lecture2/optimization/context">Context</Link>
        </li>
      </ul>
      <h2>State Management</h2>
      <ul>
        <li>
          <Link href="/lecture3/">Redux</Link>
        </li>
      </ul>
    </div>
  );
}
