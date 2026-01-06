import type { Post } from './types';

/**
 * This page uses Static Site Generation (SSG).
 * The HTML is generated once at build time
 * and never regenerated.
 */
export default async function SSG() {
  /**
   * Time when this HTML was generated.
   * This value is fixed after `next build`
   * and will never change until the next build.
   */
  const now = new Date().toString();

  /**
   * Fetch posts using the default cache behavior.
   * Data is cached permanently at build time.
   * No revalidation is configured.
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  const posts: Post[] = await res.json();

  return (
    <>
      <h2>SSG Page</h2>
      <h3>Generated at build time: {now}</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

/**
 * This page is treated as SSG because:
 * - it does NOT define `revalidate`
 * - it does NOT use cookies(), headers(), or cache: 'no-store'
 * - all fetch requests use the default static cache
 *
 * Result:
 * - HTML is generated once during `next build`
 * - HTML is never regenerated
 * - users always see the same HTML until a new build
 */
