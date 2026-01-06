import * as React from 'react';
import DynamicPosts from './dynamic-posts';

/**
 * ⚠️ IMPORTANT:
 * This page is NOT truly Hybrid with SSR.
 *
 * Even though `revalidate` is defined and `Suspense` is used,
 * the page HTML will still be rendered on EVERY request
 * if `DynamicPosts` uses dynamic server data
 * (e.g. `fetch` with `cache: 'no-store'`, cookies, headers).
 *
 * Reason:
 * - Server-side dynamic data propagates UP the render tree
 * - `Suspense` controls streaming, NOT render strategy
 *
 * Result:
 * - The entire page becomes SSR
 * - `revalidate` is ignored
 */
export const revalidate = 10;

export default function Hybrid() {
  /**
   * This timestamp looks like an ISR indicator,
   * but in this setup it will change on every request
   * because the page is forced into SSR mode.
   */
  const now = new Date().toString();

  return (
    <>
      <h2>Hybrid Page</h2>
      <h3>Page generated at: {now}</h3>

      {/*
        This Suspense boundary does NOT isolate SSR.
        It only affects streaming behavior.
      */}
      <React.Suspense fallback={<p>Loading dynamic block...</p>}>
        <DynamicPosts />
      </React.Suspense>
    </>
  );
}
