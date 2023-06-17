import BrowseCategories from "@/components/BrowseCategories";
import DiscoverMoreNFTs from "@/components/DiscoverMoreNFTs";
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
      <DiscoverMoreNFTs />
    </main>
  );
}
