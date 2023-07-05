"use client";
import HighlightedNFT from "./HighlightedNFT";
import RocketLaunch from "@/public/icons/RocketLaunch.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SlideAnimaton from "./SlideAnimaton";
import { fadeIn } from "@/app/animations";

export default function Hero() {
  return (
    <section className="py-10 md:py-20 md:grid md:grid-cols-2 md:gap-x-[30px] lg:gap-x-[60px] container">
      <div className="justify-self-start">
        {/* Headline and Description */}
        <div>
          <div className="overflow-hidden">
            <SlideAnimaton>
              <h1 className="font-sans font-semibold text-xl md:text-2xl lg:text-4xl mb-[10px] md:mb-5">
                Discover digital art & Collect NFTs
              </h1>
            </SlideAnimaton>
          </div>
          <SlideAnimaton>
            <p className="font-sans overflow-hidden lg:text-md">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </SlideAnimaton>
        </div>
      </div>

      {/* Hero's Image */}
      <Link href="/artist" className="md:row-span-2">
        <HighlightedNFT />
      </Link>

      {/* CTA and Info */}
      <div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
          {/* CTA Button */}
          <Link
            href="/signup"
            className="btn-secondary-fill w-full md:w-[224px] my-10 md:my-5 lg:my-[30px]"
          >
            <Image
              src={RocketLaunch}
              alt="Button Icon"
              width={20}
              height={20}
              className="mr-3"
            />
            Get Started
          </Link>
        </motion.div>

        {/* Addition Info */}
        <div className="w-full grid grid-cols-3">
          <SlideAnimaton>
            <div>
              <h5 className="font-mono font-bold text-lg lg:text-xl">240k+</h5>
              <span className="lg:text-md lg:text-[24px]">Total Sale</span>
            </div>
          </SlideAnimaton>
          <SlideAnimaton>
            <div className="justify-self-center">
              <div>
                <h5 className="font-mono font-bold text-lg lg:text-xl">
                  100k+
                </h5>
                <span className="lg:text-md lg:text-[24px]">Auctions</span>
              </div>
            </div>
          </SlideAnimaton>
          <SlideAnimaton>
            <div className="justify-self-end">
              <h5 className="font-mono font-bold text-lg lg:text-xl">240k+</h5>
              <span className="lg:text-md lg:text-[24px]">Artist</span>
            </div>
          </SlideAnimaton>
        </div>
      </div>
    </section>
  );
}
