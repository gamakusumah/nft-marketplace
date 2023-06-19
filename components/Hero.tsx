import HighlightedNFT from "./HighlightedNFT";

export default function Hero() {
  return (
    <section className="py-10 md:py-20 md:grid md:grid-cols-2 md:gap-x-[30px] lg:gap-x-[60px] container">
      <div className="justify-self-start">
        {/* Headline and Description */}
        <div>
          <h1 className="font-sans font-semibold text-xl md:text-2xl lg:text-4xl mb-[10px] md:mb-5">
            Discover digital art & Collect NFTs
          </h1>
          <p className="font-sans lg:text-md">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
      </div>

      {/* Hero's Image */}
      <div className="md:row-span-2">
        <HighlightedNFT />
      </div>

      {/* CTA and Info */}
      <div>
        {/* CTA Button */}
        <button className="btn-secondary-fill w-full md:w-[224px] my-10 md:my-5 lg:my-[30px]">
          <span className="h-5 w-5 bg-white mr-3"></span>
          Get Started
        </button>

        {/* Addition Info */}
        <div className="w-full grid grid-cols-3">
          <div>
            <h5 className="font-mono font-bold text-lg lg:text-xl">240k+</h5>
            <span className="lg:text-md lg:text-[24px]">Total Sale</span>
          </div>
          <div className="justify-self-center">
            <div>
              <h5 className="font-mono font-bold text-lg lg:text-xl">100k+</h5>
              <span className="lg:text-md lg:text-[24px]">Auctions</span>
            </div>
          </div>
          <div className="justify-self-end">
            <h5 className="font-mono font-bold text-lg lg:text-xl">240k+</h5>
            <span className="lg:text-md lg:text-[24px]">Artist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
