import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link href="/isr">Go to ISR page</Link>
        </li>
        <li>
          <Link href="/server-actions">Go to server-actions page</Link>
        </li>
      </ul>
    </div>
  );
}
