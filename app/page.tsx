import BrowseCategories from "@/components/BrowseCategories";
import DiscoverMoreNFTs from "@/components/DiscoverMoreNFTs";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NFTHighlight from "@/components/NFTHighlight";
import SubscribeWidget from "@/components/SubscribeWidget";
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
      <NFTHighlight />
      <HowItWorks />
      <SubscribeWidget />
    </main>
  );
}
