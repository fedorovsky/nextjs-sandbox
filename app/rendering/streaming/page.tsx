import * as React from 'react';
import SlowPosts from './slow-posts';

/**
 * This page uses Server-Side Rendering (SSR) with Streaming.
 *
 * Key points:
 * - HTML is generated on EVERY request
 * - No caching is used
 * - Streaming is visible in the browser
 */
export const dynamic = 'force-dynamic';

export default function Streaming() {
  /**
   * Time when this HTML render started.
   * Changes on every request.
   */
  const now = new Date().toString();

  return (
    <>
      <h2>Streaming (SSR)</h2>
      <h3>Rendered at: {now}</h3>

      {/*
        Suspense enables streaming:
        - Fallback is sent immediately
        - Slow content is streamed later
      */}
      <React.Suspense fallback={<p>Loading streamed content...</p>}>
        <SlowPosts />
      </React.Suspense>
    </>
  );
}
