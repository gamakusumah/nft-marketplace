import NFTCard from "./NFTCard";

export default function DiscoverMoreNFTs() {
  return (
    <section className="container py-10 md:pb-20 lg:mt-20 grid md:grid-cols-2">
      {/* Headline */}
      <div>
        <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          Discover more NFTs
        </h2>
        <p className="font-sans lg:text-md">Explore new trending NFTs</p>
      </div>

      {/*NFTs Cards */}
      <div className="h-[1246px] md:h-[469px] overflow-hidden my-10 md:mb-0 md:order-3 md:col-span-2 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-[30px]">
        <NFTCard
          name="NFT Name"
          artist="NFT Artist"
          price={1.63}
          highestBid={0.33}
          imgSrc="/images/nft/1.jpg"
          bgColor="sec"
        />
        <NFTCard
          name="NFT Name"
          artist="NFT Artist"
          price={1.63}
          highestBid={0.33}
          imgSrc="/images/nft/2.jpg"
          bgColor="sec"
        />
        <NFTCard
          name="NFT Name"
          artist="NFT Artist"
          price={1.63}
          highestBid={0.33}
          imgSrc="/images/nft/3.jpg"
          bgColor="sec"
        />
      </div>

      {/* Button */}
      <button className="btn-secondary-outline w-full md:w-[247px] md:place-self-end">
        <span className="h-5 w-5 bg-cta mr-3"></span>
        See All
      </button>
    </section>
  );
}
