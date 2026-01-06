// /**
//  * Dynamic route example.
//  * URL: /routing/:slug
//  */
// export default function DynamicRoute({ params }: { params: { slug: string } }) {
//   return <h2>Dynamic route: {params.slug}</h2>;
// }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <h2>Slug: {slug}</h2>;
}
