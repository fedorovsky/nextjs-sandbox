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
    </ul>
  );
}
