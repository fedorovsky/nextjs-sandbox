import type { Post } from './types';

/**
 * Regenerate the page HTML after 10 seconds
 * when the next HTTP request to this page arrives.
 * (Incremental Static Regeneration) ISR
 */
export const revalidate = 10;

export default async function ISR() {
  /**
   * Time when this HTML was generated.
   * Changes ONLY when the page is regenerated,
   * not on every request.
   */
  const now = new Date().toString();

  /**
   * Fetch posts and cache the response.
   * The cached data is refreshed every 10 seconds.
   * Keeps data in sync with page regeneration.
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    next: { revalidate: 10 },
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <h2>ISR Page</h2>
      <h3>Last generated at: {now}</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

/**
 * This page is treated as ISR because:
 * - it does NOT use cookies(), headers(), or cache: 'no-store'
 * - it defines `export const revalidate`
 * - all fetch requests use cache with revalidation
 *
 * Result:
 * - HTML is generated statically
 * - HTML is regenerated in the background
 *   on the next request after the revalidate period
 */
