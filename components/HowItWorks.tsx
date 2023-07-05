"use client";

import InfoCard from "./InfoCard";
import SlideAnimaton from "./SlideAnimaton";
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";

export default function HowItWorks() {
  return (
    <section className="container py-10 lg:py-20 ">
      {/* Headline */}
      <div className="mb-10 lg:mb-12">
        <SlideAnimaton>
          <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
            How It Works
          </h2>
        </SlideAnimaton>
        <SlideAnimaton>
          <p className="font-sans lg:text-md">Find out how to get started</p>
        </SlideAnimaton>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid gap-5 md:grid-cols-3 md:gap-[30px]"
      >
        <InfoCard
          title="Setup Your Wallet"
          text="Set up your wallet of choice. Connect it to the NFT market by clicking
          the wallet icon in the top right corner."
          imgSrc="/icons/info-card/Setup-Wallet-Icon.svg"
        />
        <InfoCard
          title="Create Collection"
          text="Upload your work and setup your collection. Add a description, social links and floor price."
          imgSrc="/icons/info-card/Create-Collection-Icon.svg"
        />
        <InfoCard
          title="Start Earning"
          text="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          imgSrc="/icons/info-card/Start-Earning-Icon.svg"
        />
      </motion.div>
    </section>
  );
}
