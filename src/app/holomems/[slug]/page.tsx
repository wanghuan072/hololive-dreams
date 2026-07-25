import { permanentRedirect } from "next/navigation";

type LegacyHolomemPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyHolomemPage({
  params,
}: LegacyHolomemPageProps) {
  const { slug } = await params;
  permanentRedirect(`/characters/${slug}`);
}
