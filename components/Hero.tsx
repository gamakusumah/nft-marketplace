export default function Hero() {
  return (
    <section className="px-[30px] md:px-[72px] lg:px-28 py-10 md:py-20">
      {/* Headline and Description */}
      <div>
        <h1 className="font-sans font-semibold text-xl">
          Discover digital art & Collect NFTs
        </h1>
        <p className="font-sans">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
      </div>

      {/* Hero's Image */}
      <div className="h-[315px] w-[315px] bg-sec rounded-[20px] my-10 overflow-hidden">
        <div className="h-[216px] w-full bg-blue-500"></div>
        <div className="h-[99px] px-5 flex justify-center flex-col bg-sec">
          <h5 className="font-sans text-lg font-semibold pb-2">
            Space Walking
          </h5>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-slate-500 rounded-full mr-3"></div>
            Animakid
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn-secondary-fill w-full my-10">
        <div className="h-5 w-5 bg-white mr-3"></div>
        Get Started
      </button>

      {/* Addition Info */}
      <div className="w-full grid grid-cols-3">
        <div>
          <h5 className="font-mono font-bold text-lg">240k+</h5>
          Total Sale
        </div>
        <div className="flex justify-center">
          <div>
            <h5 className="font-mono font-bold text-lg">100k+</h5>
            Auctions
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <h5 className="font-mono font-bold text-lg">240k+</h5>
            <span>Artist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
