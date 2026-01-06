'use client';

import * as React from 'react';
import type { Post } from './types';

/**
 * This page uses Client-Side Rendering (CSR).
 *
 * Important:
 * - HTML is rendered without data
 * - Data is fetched in the browser
 * - No SSG / ISR / SSR involved
 */
export default function CSR() {
  const [posts, setPosts] = React.useState<Post[] | null>(null);

  /**
   * Runs in the browser after the page is loaded.
   * Fetch happens on the client side.
   */
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <h2>CSR Page</h2>

      {!posts && <p>Loading posts in browser...</p>}

      {posts && (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
