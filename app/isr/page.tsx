import type { Post } from '@/app/isr/types';

/**
 * This is an example of a page that uses Incremental Static Regeneration (ISR).
 * It will be regenerated every 10 seconds.
 * The page will display the last generated time.
 */
export const revalidate = 10;

export default async function ISR() {
  const now = new Date().toISOString();

  /**
   * The `next: { revalidate: 10 }` option tells Next.js to
   * revalidate this page every 10 seconds.
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    next: { revalidate: 10 },
  });

  const posts: Post[] = await res.json();

  return (
    <div>
      <h2>ISR Page</h2>
      <h3>Last generated at: {now}</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
