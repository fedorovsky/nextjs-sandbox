import type { Post } from './types';

/**
 * This component simulates slow server work.
 * It still uses static / ISR data.
 *
 * Streaming happens because the component is slow,
 * not because it is dynamic.
 */
export default async function SlowPosts() {
  // ⏱ Artificial delay on every render
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    next: { revalidate: 10 },
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <h4>Streamed content</h4>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}
