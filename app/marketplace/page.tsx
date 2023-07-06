"use client";

import Image from "next/image";
import TabBar from "./components/TabBar";
import NFTCards from "@/components/NFTCards";
import SlideAnimaton from "@/components/SlideAnimaton";

export default function Marketplace() {
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
      name: "Magic Mushroom 0325",
      artist: "Shroomie",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/5.jpg",
      artistAvatarSrc: "/images/avatar/avatar-7.jpg",
    },
    {
      name: "Happy Robot 032",
      artist: "BeKind2Robots",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/6.jpg",
      artistAvatarSrc: "/images/avatar/avatar-12.jpg",
    },
    {
      name: "Happy Robot 024",
      artist: "BeKind2Robots",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/13.jpg",
      artistAvatarSrc: "/images/avatar/avatar-12.jpg",
    },
    {
      name: "Designer Bear",
      artist: "MrFox",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/14.jpg",
      artistAvatarSrc: "/images/avatar/avatar-6.jpg",
    },
    {
      name: "Colorful Dog 0356",
      artist: "KeepItreal",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/16.jpg",
      artistAvatarSrc: "/images/avatar/avatar-15.jpg",
    },
    {
      name: "Dancing Robot 0312",
      artist: "Robotico",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/23.jpg",
      artistAvatarSrc: "/images/avatar/avatar-8.jpg",
    },
    {
      name: "Cherry Blossom Girl 035",
      artist: "MoonDancer",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/15.jpg",
      artistAvatarSrc: "/images/avatar/avatar-16.jpg",
    },
    {
      name: "Space Travel",
      artist: "NebulaKid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/19.jpg",
      artistAvatarSrc: "/images/avatar/avatar-10.jpg",
    },
    {
      name: "Sunset Dimiension",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/8.jpg",
      artistAvatarSrc: "/images/avatar/avatar-14.jpg",
    },
    {
      name: "Desert Walk",
      artist: "Catch 22",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/22.jpg",
      artistAvatarSrc: "/images/avatar/avatar-20.jpg",
    },
    {
      name: "IceCream Ape 0324",
      artist: "Ice Ape Club",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/21.jpg",
      artistAvatarSrc: "/images/avatar/avatar-18.jpg",
    },
    {
      name: "Colorful Dog 0344",
      artist: "PuppyPower",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/26.jpg",
      artistAvatarSrc: "/images/avatar/avatar-13.jpg",
    },
  ];
  return (
    <main>
      {/* Headline and subhead */}
      <div className="container py-[30px] lg:py-20">
        <div>
          <SlideAnimaton>
            <h1 className="text-xl font-semibold mb-[10px] md:text-2xl lg:text-3xl">
              Browse Categories
            </h1>
          </SlideAnimaton>
          <SlideAnimaton>
            <p className="lg:text-md">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </SlideAnimaton>
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
        <NFTCards datas={nfts} bgColorCard="prim" />
      </section>
    </main>
  );
}
