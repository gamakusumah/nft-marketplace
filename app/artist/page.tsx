import Cover from "./components/Cover";
import ArtistInfo from "./components/ArtistInfo";
import NFTCards from "@/components/NFTCards";
import TabBar from "@/components/TabBar";

export default function Artist() {
  return (
    <main>
      <Cover />
      <ArtistInfo />
      <TabBar />
      <section className="py-20 bg-sec border-b-2 border-prim ">
        <NFTCards />
      </section>
    </main>
  );
}
