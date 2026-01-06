/**
 * Catch-all route example.
 *
 * URL examples:
 * - /routing/catch-all/a
 * - /routing/catch-all/a/b
 * - /routing/catch-all/a/b/c
 */
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  return (
    <>
      <h2>Catch-all route</h2>
      <p>Segments:</p>
      <ul>
        {slug.map((part) => (
          <li key={part}>{part}</li>
        ))}
      </ul>
    </>
  );
}
