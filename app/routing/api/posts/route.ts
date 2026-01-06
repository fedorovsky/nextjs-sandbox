import { NextResponse } from 'next/server';

/**
 * Minimal Route Handler example.
 *
 * - Runs on every HTTP request
 * - Handler itself is NOT cached
 * - Only the fetch response is cached
 */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    next: { revalidate: 10 },
  });

  const posts = await res.json();

  return NextResponse.json(posts);
}
