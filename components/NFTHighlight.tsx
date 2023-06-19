import AuctionTimer from "./AuctionTimer";
import Image from "next/image";
import Link from "next/link";

export default function NFTHighlight() {
  return (
    <section className="w-full h-[590px] md:h-[630px] bg-[url('/images/NFT-Highlight.jpg')] bg-cover bg-center relative">
      <div className="w-full h-full bg-gradient-to-t from-cta"></div>
      <div className="h-full w-full absolute top-0 pt-[120px] md:pt-[360px] md:pb-[60px] px-[30px] md:px-[82px] pb-10">
        <div className="w-full h-full flex flex-col justify-between md:grid md:grid-cols-2 md:gap-y-[30px]">
          {/* Artist */}
          <div className="w-[151px] h-11 bg-sec flex items-center justify-center rounded-[20px] md:order-1">
            <Image
              src="/images/avatar/avatar-7.svg"
              width={24}
              height={24}
              alt="Avatar Image"
              className="mr-3"
            />
            <p>Shroomie</p>
          </div>
          <h3 className="font-sans font-bold text-2xl md:order-3 md:whitespace-nowrap">
            Magic Mushrooms
          </h3>
          <div className="md:order-2 md:row-span-3 md:self-end md:place-self-end">
            <AuctionTimer />
          </div>
          <Link
            href="/"
            className="btn-secondary-fill bg-white text-cta md:order-4 md:w-[194px]"
          >
            <span className="w-5 h-5 bg-cta mr-3"></span>
            {/* <Image
              src="/icons/Eye.svg"
              width={20}
              height={20}
              alt="Button Icon"
              className="text-cta"
            /> */}
            See NFT
          </Link>
        </div>
      </div>
    </section>
  );
}
