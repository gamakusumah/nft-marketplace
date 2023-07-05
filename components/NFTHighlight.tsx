import AuctionTimer from "./AuctionTimer";
import Image from "next/image";
import Link from "next/link";

export default function NFTHighlight() {
  return (
    <section className="w-full h-[590px] md:h-[630px] bg-[url('/images/NFT-Highlight.jpg')] bg-cover bg-center relative">
      <div className="w-full h-full bg-gradient-to-t from-cta"></div>
      <div className="h-full w-full absolute top-0 pt-[120px] md:pt-[360px] md:pb-[60px] px-[30px] md:px-[82px] lg:px-[195px] pb-10">
        <div className="h-full flex flex-col justify-between md:grid md:grid-cols-2 md:gap-y-[30px]">
          {/* Artist */}
          <Link
            href="/artist"
            className="w-[151px] h-11 bg-sec flex items-center justify-center rounded-[20px] md:order-1"
          >
            <Image
              src="/images/avatar/avatar-7.jpg"
              width={24}
              height={24}
              alt="Avatar Image"
              className="mr-3 rounded-full"
            />
            Shroomie
          </Link>
          <h2 className="font-sans font-bold text-2xl md:order-3 md:whitespace-nowrap">
            Magic Mushrooms
          </h2>
          <div className="md:order-2 md:row-span-3 md:self-end md:place-self-end">
            <AuctionTimer btnHidden={true} />
          </div>
          <Link
            href="/nft"
            className="btn-secondary-fill bg-white text-cta md:order-4 md:w-[194px] hover:bg-gray-100"
          >
            <Image
              src="/icons/EyeCTA.svg"
              width={20}
              height={20}
              alt="Button Icon"
              className="mr-3"
            />
            See NFT
          </Link>
        </div>
      </div>
    </section>
  );
}
