/**
 * Optional catch-all route example.
 *
 * Matches ZERO or MORE URL segments.
 *
 * URL examples:
 * - /routing/optional
 * - /routing/optional/a
 * - /routing/optional/a/b
 */
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  /**
   * In Next.js 16 `params` is async.
   * It must be awaited before use.
   */
  const { slug } = await params;

  return (
    <>
      <h2>Optional catch-all route</h2>

      {slug ? (
        <>
          <p>URL segments:</p>
          <ul>
            {slug.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No URL segments</p>
      )}
    </>
  );
}
