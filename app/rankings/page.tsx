import RankingList from "./components/RankingList";
import TabBar from "./components/TabBar";

export default function page() {
  return (
    <main>
      {/* Headline and subhead */}
      <div className="container py-[30px]">
        <h1 className="text-xl font-semibold mb-[10px] md:text-2xl lg:text-3xl">
          Top Creators
        </h1>
        <p className="lg:text-md">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
      <TabBar />
      <RankingList />
    </main>
  );
}
