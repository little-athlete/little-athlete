export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <section className="p-8">Program detail: {slug} — placeholder</section>
}
