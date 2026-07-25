import { permanentRedirect } from "next/navigation";

export default function LegacyHolomemsPage() {
  permanentRedirect("/characters");
}
