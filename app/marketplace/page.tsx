import Image from "next/image";
import TabBar from "./components/TabBar";
import NFTCards from "@/components/NFTCards";

export default function Marketplace() {
  return (
    <main>
      {/* Headline and subhead */}
      <div className="container py-[30px] lg:py-20">
        <div>
          <h1 className="text-xl font-semibold mb-[10px] md:text-2xl lg:text-3xl">
            Browse Categories
          </h1>
          <p className="lg:text-md">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>

        <div className="h-[60px] bg-prim border-sec border-[1px] px-5 rounded-[20px] flex items-center justify-between mt-[30px]    ">
          <input
            type="text"
            id=""
            placeholder="Search your favourite NFTs"
            className="bg-prim w-full mr-5 focus:outline-none"
          />
          <Image
            src="/icons/MagnifyingGlass.svg"
            width={24}
            height={24}
            alt="Input Icon"
          />
        </div>
      </div>

      <TabBar />
      <section className="py-20 bg-sec border-b-2 border-prim ">
        <NFTCards bgColorCard="prim" />
      </section>
    </main>
  );
}
