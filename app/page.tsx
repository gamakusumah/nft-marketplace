import BrowseCategories from "@/components/BrowseCategories";
import Hero from "@/components/Hero";
import TopRatedArtist from "@/components/TopRatedArtist";
import TrendingCollection from "@/components/TrendingCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingCollection />
      <TopRatedArtist />
      <BrowseCategories />
    </main>
  );
}
