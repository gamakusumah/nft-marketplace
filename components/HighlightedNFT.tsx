import Image from "next/image";
import HighlightedImg from "@/public/images/Highlight.jpg";
import { easeIn, motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

export default function HighlightedNFT() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
      className="h-[315px] md:h-[330px] lg:h-[510px] w-[315px] md:w-[330px] lg:w-[510px] bg-sec rounded-[20px] my-10 md:my-0 overflow-hidden"
    >
      <div className="h-[206px] md:h-[221px] lg:h-[401px] w-full">
        <Image
          src={HighlightedImg}
          alt="Highlighted NFT"
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
      <div className="h-[109px] px-5 flex justify-center flex-col bg-sec  w-full">
        <h5 className="font-sans text-lg font-semibold mb-[10px]">
          Space Walking
        </h5>
        <div className="flex items-center">
          <div className="h-6 w-6 bg-slate-500 rounded-full mr-3 overflow-hidden">
            <Image
              src="/images/avatar/avatar-21.jpg"
              width={24}
              height={24}
              alt="Artist Avatar"
            />
          </div>
          <span>Animakid</span>
        </div>
      </div>
    </motion.div>
  );
}
