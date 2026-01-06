import Link from 'next/link';

/**
 * Routes overview page.
 * Contains examples of different route types.
 */
export default function RoutesPage() {
  return (
    <>
      <h1>Route Types</h1>
      <ul>
        <li>
          <Link href="/routing/static">Static</Link>
        </li>
        <li>
          <Link href="/routing/dynamic/hello">Dynamic</Link>
        </li>
        <li>
          <Link href="/routing/catch-all/a/b/c">Catch-all</Link>
        </li>
        <li>
          <Link href="/routing/optional-catch-all/a/b/c">Optional Catch-all</Link>
        </li>
        <li>
          <Link href="/routing/api/posts">Route handler</Link>
        </li>
      </ul>
    </>
  );
}
