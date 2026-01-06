import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link href="/rendering">Rendering</Link>
        </li>
        <li>
          <Link href="/routing">Routing</Link>
        </li>
        <li>
          <Link href="/server-actions">Server Actions</Link>
        </li>
      </ul>
    </div>
  );
}
