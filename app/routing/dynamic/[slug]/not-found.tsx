/**
 * Not Found page for the dynamic route `/routing/[slug]`.
 *
 * This file is rendered when:
 * - `notFound()` is called in `page.tsx`
 * - The requested post does not exist
 * - The route parameter is invalid
 */
export default function NotFound() {
  return (
    <section>
      <h2>Post not found</h2>

      <p>The post you are looking for does not exist or has been removed.</p>
    </section>
  );
}
