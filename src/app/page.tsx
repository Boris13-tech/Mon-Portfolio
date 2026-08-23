import { Hero } from "@/components/hero/Hero";
import { StatStrip } from "@/components/hero/StatStrip";
import { HomeGrid } from "@/components/home/HomeGrid";
import { StructuredData } from "@/components/seo/StructuredData";
import { personSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <StructuredData data={personSchema()} />
      <Hero />
      <StatStrip />
      <HomeGrid />
    </>
  );
}
