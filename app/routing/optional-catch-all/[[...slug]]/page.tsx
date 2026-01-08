/**
 * Optional catch-all route for `/routing/optional-catch-all/...segments`.
 *
 * Handles zero or more URL segments after `/routing/optional-catch-all`.
 *
 * Examples:
 * - `/routing/optional-catch-all`
 * - `/routing/optional-catch-all/a`
 * - `/routing/optional-catch-all/a/b/c`
 */
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  /**
   * Parameters resolved for `/routing/optional-catch-all/...segments`.
   *
   * - `slug` is `undefined` when no segments are provided
   *   (`/routing/optional-catch-all`)
   * - `slug` is `string[]` when one or more segments exist
   *   (`/routing/optional-catch-all/...segments`)
   *
   *   For `/routing/optional-catch-all/a/b/c`,
   *   slug` equals `['a', 'b', 'c']`
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
