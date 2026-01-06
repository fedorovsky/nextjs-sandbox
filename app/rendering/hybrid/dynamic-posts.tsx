import type { Post } from './types';

/**
 * This component uses Server-Side Rendering.
 * It is rendered on EVERY request,
 * even when the parent page is static.
 */
export default async function DynamicPosts() {
  /**
   * Time when this component was rendered.
   * Changes on every request.
   */
  const now = new Date().toString();

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    cache: 'no-store',
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <h4>Dynamic block (SSR)</h4>
      <p>Rendered at: {now}</p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}
