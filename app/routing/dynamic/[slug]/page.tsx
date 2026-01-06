import { notFound } from 'next/navigation';
import type { Post } from './types';

/**
 * Pre-generate selected dynamic routes at build time.
 *
 * These pages will be statically generated during `next build`.
 * All other slugs will be generated on demand (ISR).
 */
export async function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

/**
 * Page props type.
 * In Next.js 15+ (including 16), `params` is asynchronous
 * and must be awaited.
 */
type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Dynamic route page component.
 *
 * Route example:
 * /routing/1
 *
 * The `slug` parameter is used as a post ID
 * to fetch data from the external API.
 */
export default async function Page({ params }: PageProps) {
  /**
   * Resolve dynamic route parameters.
   */
  const { slug } = await params;

  /**
   * Validate the slug.
   * If it is not a number, return a 404 page.
   */
  if (Number.isNaN(Number(slug))) {
    notFound();
  }

  /**
   * Fetch post data from the API.
   * `revalidate: 10` enables Incremental Static Regeneration (ISR).
   */
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next: { revalidate: 10 },
  });

  /**
   * Handle 404 response from the API.
   */
  if (res.status === 404) {
    notFound();
  }

  /**
   * Handle other unsuccessful responses.
   */
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  /**
   * Parse the API response.
   */
  const post: Post = await res.json();

  /**
   * Render the page content.
   */
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>Post ID: {post.id}</small>
    </article>
  );
}
