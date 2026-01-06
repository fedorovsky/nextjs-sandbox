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
          <Link href="/routing/dynamic">Dynamic</Link>
        </li>
      </ul>
    </>
  );
}
