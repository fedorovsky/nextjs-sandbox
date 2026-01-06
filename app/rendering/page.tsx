import Link from 'next/link';

export default function Rendering() {
  return (
    <ul>
      <li>
        <Link href="/rendering/isr">ISR (Incremental Static Regeneration)</Link>
      </li>
      <li>
        <Link href="/rendering/ssg">SSG (Static Site Generation)</Link>
      </li>
      <li>
        <Link href="/rendering/ssr">SSR (Server-Side Rendering)</Link>
      </li>
      <li>
        <Link href="/rendering/hybrid">Hybrid Rendering (ISR + SSR)</Link>
      </li>
    </ul>
  );
}
