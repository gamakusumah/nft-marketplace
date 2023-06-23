import NFTCards from "@/components/NFTCards";
import Image from "next/image";
import Link from "next/link";

export default function MoreNFTsFromThisArtist() {
  interface NFTProto {
    name: string;
    artist: string;
    price: number;
    highestBid: number;
    nftImgSrc: string;
    artistAvatarSrc: string;
  }

  const nfts: NFTProto[] = [
    {
      name: "Foxy Life",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/7.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Cat From Future",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/9.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Psycho Dog",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/11.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Designer Bear",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/14.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Dancing Robot 0375",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/17.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Dancing Robot 0356",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/20.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Dancing Robot 0321",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/23.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Dancing Robots 0512",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/25.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Dancing Robot 0024",
      artist: "Orbitian",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/27.jpg",
      artistAvatarSrc: "/images/avatar/avatar-9.jpg",
    },
  ];

  return (
    <section className="container py-10 grid gap-[30px] md:grid-cols-2 lg:py-20">
      <h2 className="text-xl font-semibold lg:text-2xl">
        More From This Artist
      </h2>
      <div className="h-[834px] md:h-auto overflow-hidden md:col-span-2 md:order-3">
        <NFTCards datas={nfts} bgColorCard="sec" />
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
