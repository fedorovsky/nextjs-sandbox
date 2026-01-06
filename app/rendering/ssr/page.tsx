import type { Post } from './types';

/**
 * This page uses Server-Side Rendering (SSR).
 * The HTML is generated on EVERY HTTP request.
 */
export const dynamic = 'force-dynamic';

export default async function SSR() {
  /**
   * Time when this HTML was generated.
   * This value changes on EVERY request.
   */
  const now = new Date().toString();

  /**
   * Fetch posts without caching.
   * This request is executed on every page request.
   * Using `no-store` forces the page into SSR mode.
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store',
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <h2>SSR Page</h2>
      <h3>Generated on request at: {now}</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

/**
 * This page is treated as SSR because:
 * - it explicitly forces dynamic rendering (`force-dynamic`)
 * - fetch uses `cache: 'no-store'`
 *
 * Result:
 * - HTML is generated on every request
 * - no HTML caching
 * - users always see fresh data
 */
