import NFTCards from "@/components/NFTCards";
import Image from "next/image";
import Link from "next/link";

export default function MoreNFTsFromThisArtist() {
  return (
    <section className="container py-10 grid gap-[30px] md:grid-cols-2 lg:py-20">
      <h2 className="text-xl font-semibold lg:text-2xl">
        More From This Artist
      </h2>
      <div className="h-[834px] md:h-auto overflow-hidden md:col-span-2 md:order-3">
        <NFTCards bgColorCard="sec" />
      </div>
      <Link
        href="/artist"
        className="btn-secondary-outline w-full md:w-[267px] md:justify-self-end"
      >
        <Image
          src="/icons/ArrowRightCTA.svg"
          width={20}
          height={20}
          alt="Button Icon"
          className="mr-3"
        />
        Go To Artist Page
      </Link>
    </section>
  );
}
