"use client";

import NFTCard from "./NFTCard";
import Image from "next/image";
import RocketLaunchCTA from "@/public/icons/RocketLaunchCTA.svg";
import Link from "next/link";
import SlideAnimaton from "./SlideAnimaton";
import { motion } from "framer-motion";
import FadeInAnimation from "./FadeInAnimation";
import { container, fadeIn, item } from "@/app/animations";

export default function DiscoverMoreNFTs() {
  return (
    <section className="container py-10 md:pb-20 lg:mt-20 grid md:grid-cols-2">
      {/* Headline */}
      <div>
        <SlideAnimaton>
          <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
            Discover more NFTs
          </h2>
        </SlideAnimaton>
        <SlideAnimaton>
          <p className="font-sans lg:text-md">Explore new trending NFTs</p>
        </SlideAnimaton>
      </div>

      {/*NFTs Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="h-[1246px] md:h-[469px] overflow-hidden my-10 md:mb-0 md:order-3 md:col-span-2 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-[30px]"
      >
        <motion.div variants={item}>
          <NFTCard
            name="Distance Galaxy"
            artist="MoonDancer"
            price={1.63}
            highestBid={0.33}
            imgSrc="/images/nft/1.jpg"
            bgColor="sec"
            avatarArtist="/images/avatar/avatar-16.jpg"
          />
        </motion.div>
        <motion.div variants={item}>
          <NFTCard
            name="Life On Edene"
            artist="NebulaKid"
            price={1.63}
            highestBid={0.33}
            imgSrc="/images/nft/2.jpg"
            bgColor="sec"
            avatarArtist="/images/avatar/avatar-10.jpg"
          />
        </motion.div>
        <motion.div variants={item}>
          <NFTCard
            name="AstroFiction"
            artist="Spaceone"
            price={1.63}
            highestBid={0.33}
            imgSrc="/images/nft/3.jpg"
            bgColor="sec"
            avatarArtist="/images/avatar/avatar-15.jpg"
          />
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        className="w-full md:w-[247px] md:place-self-end"
      >
        <Link href="/marketplace" className="btn-secondary-outline">
          <Image
            src={RocketLaunchCTA}
            alt="Button Icon"
            width={20}
            height={20}
            className="mr-3"
          />
          See All
        </Link>
      </motion.div>
    </section>
  );
}
