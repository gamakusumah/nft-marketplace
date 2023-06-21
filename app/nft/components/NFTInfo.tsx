import ArtistCardSmall from "@/components/ArtistCardSmall";
import AuctionTimer from "@/components/AuctionTimer";
import Image from "next/image";
import Link from "next/link";

export default function NFTInfo() {
  return (
    <section className="container py-10 grid gap-5 md:grid-cols-2 md:gap-[30px] lg:grid-col1">
      {/* Headline and Subhead */}
      <div>
        <h1 className="font-semibold text-xl mb-[10px] md:text-2xl lg:text-3xl">
          The Orbitians
        </h1>
        <p className="text-caption lg:text-md">Minted on Sep 30, 2022</p>
      </div>

      {/* Auction Timer */}
      <div className="md:row-span-5 md:justify-self-end">
        <AuctionTimer btnHidden={false} />
      </div>
      {/* Created by */}
      <div>
        <h2 className="font-mono text-caption mb-[10px] lg:text-lg lg:font-semibold">
          Created by
        </h2>
        <ArtistCardSmall name="Orbitian" imgSrc="/images/avatar/avatar-9.svg" />
      </div>

      {/* Description */}
      <div>
        <h2 className="font-mono text-caption mb-[10px] lg:text-lg lg:font-semibold">
          Description
        </h2>
        <p className="max-h-[484px] lg:max-h-[595px] lg:w-[605px] lg:text-md">
          The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
          blockchain,
          <br />
          <br />
          There are all sorts of beings in the NFT Universe. The most advanced
          and friendly of the bunch are Orbitians.
          <br />
          <br />
          They live in a metal space machines, high up in the sky and only have
          one foot on Earth.
          <br />
          These Orbitians are a peaceful race, but they have been at war with a
          group of invaders for many generations. The invaders are called
          Upside-Downs, because of their inverted bodies that live on the
          ground, yet do not know any other way to be. Upside-Downs believe that
          they will be able to win this war if they could only get an eye into
          Orbitian territory, so they've taken to make human beings their
          target.
        </p>
      </div>

      {/* Details */}
      <div className="grid gap-[10px]">
        <h2 className="font-mono text-caption mb-5 lg:text-lg lg:font-semibold">
          Details
        </h2>

        <Link href="/" className="flex items-center">
          <Image
            src="/icons/Globe.svg"
            width={24}
            height={24}
            alt="Artist Photo"
            className="lg:w-8 lg:h-8"
          />
          <h5 className="ml-3 lg:text-md">View on Etherscan</h5>
        </Link>
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/Globe.svg"
            width={24}
            height={24}
            alt="Artist Photo"
            className="lg:w-8 lg:h-8"
          />
          <h5 className="ml-3 lg:text-md">View Original</h5>
        </Link>
      </div>

      {/* Tags */}
      <div>
        <h2 className="font-mono text-caption mb-5 md:font-sans md:text-md md:font-semibold lg:text-lg">
          Tags
        </h2>
        <div className="flex flex-col items-baseline space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <button className="uppercase font-semibold px-[30px] py-3 bg-sec rounded-[20px]">
            ANIMATION
          </button>
          <button className="uppercase font-semibold px-[30px] py-3 bg-sec rounded-[20px]">
            illustration
          </button>
          <button className="uppercase font-semibold px-[30px] py-3 bg-sec rounded-[20px]">
            moon
          </button>
          <button className="uppercase font-semibold px-[30px] py-3 bg-sec rounded-[20px]">
            space
          </button>
        </div>
      </div>
    </section>
  );
}
