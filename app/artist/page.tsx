import Cover from "./components/Cover";
import ArtistInfo from "./components/ArtistInfo";
import NFTCards from "@/components/NFTCards";

export default function Artist() {
  return (
    <main>
      <Cover />
      <ArtistInfo />
      <section className="py-20 bg-sec border-b-2 border-prim ">
        <NFTCards />
      </section>
    </main>
  );
}
