import Image from "next/image";
import Link from "next/link";
interface CardProp {
  artistName: string;
  avatarImgSrc: string;
  NFTName: string;
  imgMainSrc: string;
  imgScdSrc: string;
  imgTrdSrc: string;
  otherCollections: number;
}
import { motion } from "framer-motion";
import { container, item } from "@/app/animations";

export default function CollectionCard(prop: CardProp) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="h-[505px] md:h-[525px] w-full flex flex-col justify-between"
    >
      {/* Photos */}
      <div className="h-[425px] w-full grid gap-[15px]">
        <Link href="/nft" className="transition-cust">
          <motion.div
            variants={item}
            className="h-[315px] md:h-[330px] w-full rounded-[20px] overflow-hidden"
          >
            <Image
              src={prop.imgMainSrc}
              width={330}
              height={330}
              className="object-cover w-full h-full"
              alt="NFT Photo"
            />
          </motion.div>
        </Link>
        <div className="h-[95px] md:h-[100px] w-full grid grid-cols-3 items-stretch gap-[15px]">
          <Link href="/nft" className="transition-cust">
            <motion.div
              variants={item}
              className=" rounded-[20px] overflow-hidden"
            >
              <Image
                src={prop.imgScdSrc}
                width={330}
                height={330}
                className="object-cover w-full h-full"
                alt="NFT Photo"
              />
            </motion.div>
          </Link>
          <Link href="/nft" className="transition-cust">
            <motion.div
              variants={item}
              className=" rounded-[20px] overflow-hidden"
            >
              <Image
                src={prop.imgTrdSrc}
                width={330}
                height={330}
                className="object-cover w-full h-full"
                alt="NFT Photo"
              />
            </motion.div>
          </Link>
          <motion.div variants={item}>
            <Link
              href="/nft"
              className="w-full h-full rounded-[20px] bg-cta font-mono text-lg font-bold flex items-center justify-center transition-cust"
            >
              {prop.otherCollections}+
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Creator */}
      <div className="h-[65px] w-full">
        <h5 className="font-sans text-lg font-semibold mb-[10px]">
          {prop.NFTName}
        </h5>
        <div className="flex items-center">
          <div className="h-6 w-6 bg-slate-500 rounded-full mr-3 overflow-hidden">
            <Link href="/artist">
              <Image
                src={prop.avatarImgSrc}
                width={24}
                height={24}
                className="object-cover w-full h-full"
                alt="Artist Photo"
              />
            </Link>
          </div>
          <span>{prop.artistName}</span>
        </div>
      </div>
    </motion.div>
  );
}
